var posts=["2026/01/29/CSP2025游记/","2026/01/29/各种代码板子/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };