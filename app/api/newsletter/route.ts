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
        Authorization: `Token ${apiKey}`,
      },
      body: JSON.stringify({ email }),
      cache: "no-store",
    })

    if (!res.ok) {
      const text = await res.text()
      return new Response(JSON.stringify({ ok: false, error: text || "Buttondown error" }), {
        status: 502,
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


