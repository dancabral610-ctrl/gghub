<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>GG HUB</title>

<style>
body{
    margin:0;
    padding:0;
    background:#050505;
    font-family:Arial;
    overflow:hidden;
    color:white;
}

.bg{
    position:absolute;
    width:100%;
    height:100%;
    background:
    radial-gradient(circle at center,
    rgba(255,0,0,0.15),
    transparent 70%);
    animation:pulse 4s infinite;
}

@keyframes pulse{
    0%{transform:scale(1);}
    50%{transform:scale(1.1);}
    100%{transform:scale(1);}
}

.container{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:420px;
    background:rgba(15,0,0,0.9);
    border:2px solid red;
    border-radius:20px;
    padding:30px;
    box-shadow:0 0 35px red;
    backdrop-filter:blur(10px);
}

.logo{
    text-align:center;
    font-size:42px;
    font-weight:bold;
    color:red;
    text-shadow:0 0 20px red;
    margin-bottom:10px;
}

.sub{
    text-align:center;
    color:#ccc;
    margin-bottom:25px;
    font-size:14px;
}

.box{
    background:#0f0f0f;
    border:1px solid red;
    border-radius:12px;
    padding:15px;
    word-break:break-all;
    font-size:13px;
    color:#ff4d4d;
}

.btns{
    display:flex;
    gap:10px;
    margin-top:20px;
}

button{
    flex:1;
    padding:14px;
    border:none;
    border-radius:12px;
    font-size:15px;
    font-weight:bold;
    cursor:pointer;
    transition:0.2s;
}

.copy{
    background:red;
    color:white;
}

.copy:hover{
    transform:scale(1.03);
    box-shadow:0 0 20px red;
}

.discord{
    background:#111;
    border:1px solid red;
    color:white;
}

.discord:hover{
    transform:scale(1.03);
    box-shadow:0 0 20px red;
}

.footer{
    text-align:center;
    margin-top:20px;
    color:#777;
    font-size:12px;
}
</style>
</head>

<body>

<div class="bg"></div>

<div class="container">

<div class="logo">GG HUB</div>

<div class="sub">
Best Blox Fruits Script Experience
</div>

<div class="box" id="script">
loadstring(game:HttpGet("https://gghub-m4cc.vercel.app/api"))()
</div>

<div class="btns">

<button class="copy" onclick="copyScript()">
Copy Script
</button>

<button class="discord" onclick="window.open('https://discord.gg/fNrB3zNDh6')">
Discord
</button>

</div>

<div class="footer">
GG HUB © 2026
</div>

</div>

<script>
function copyScript(){
    const text =
`loadstring(game:HttpGet("https://gghub-m4cc.vercel.app/api"))()`

    navigator.clipboard.writeText(text)

    alert("Script copied!")
}
</script>

</body>
</html>
