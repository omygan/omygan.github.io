var posts=["posts/3fcfc58a.html","posts/d95d7e09.html","posts/e1962cae.html","posts/8892ccdc.html","posts/9c989aa7.html","posts/f8e09374.html","posts/d0a69f1e.html","posts/d8a440d1.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};