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

    // Placeholder: integrate Mailchimp/Buttondown/ConvertKit here.
    // Simulate success.
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


