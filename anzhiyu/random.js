var posts=["2026/01/29/CSP2025游记/","2026/01/29/各种代码板子/","2026/01/30/如何搭建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };