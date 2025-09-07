export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || ""
    let email = ""
    if (contentType.includes("application/json")) {
      const body = await request.json()
      email = String(body.email || "").trim()
    } else {
      const form = await request.formData()
      email = String(form.get("email") || "").trim()
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      })
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY
    if (!apiKey) {
      return new Response(JSON.stringify({ ok: false, error: "Missing BUTTONDOWN_API_KEY" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      })
    }

    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${apiKey}`,
      },
      body: JSON.stringify({ email }),
      cache: "no-store",
    })

    if (!res.ok) {
      let errorText = "Buttondown error"
      try {
        const j = await res.json()
        errorText = j?.detail || j?.message || JSON.stringify(j)
      } catch {
        const t = await res.text()
        if (t) errorText = t
      }
      return new Response(JSON.stringify({ ok: false, error: errorText, status: res.status }), {
        status: res.status,
        headers: { "content-type": "application/json" },
      })
    }

    return new Response(JSON.stringify({ ok: true, message: "Subscribed" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    })
  }
}


