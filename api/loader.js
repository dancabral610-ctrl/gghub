export default async function handler(req, res) {

    const ua = req.headers["user-agent"] || ""

    // NAVEGADOR
    if (ua.includes("Mozilla")) {

        res.setHeader("Content-Type", "text/html")

        return res.send(`
        <html>
        <head>
            <title>GG HUB</title>
        </head>

        <body style="
            background:#0a0000;
            color:white;
            font-family:sans-serif;
            text-align:center;
            padding-top:120px;
        ">

            <h1 style="color:red;">GG HUB</h1>

            <p>Official Loader</p>

            <button onclick="
            navigator.clipboard.writeText(
            \`loadstring(game:HttpGet('https://gghub-gcox.vercel.app/api/main'))()\`
            )"
            style="
                padding:15px;
                border:none;
                border-radius:10px;
                background:red;
                color:white;
                font-size:16px;
                cursor:pointer;
            ">
            Copy Script
            </button>

            <br><br>

            <a href="https://discord.gg/seulink"
            style="color:red;">
            Discord
            </a>

        </body>
        </html>
        `)
    }

    // EXECUTOR
    return res.redirect(
        "https://gghub-gcox.vercel.app/api/main"
    )
}
