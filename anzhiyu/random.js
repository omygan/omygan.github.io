var posts=["posts/3fcfc58a.html","posts/74c45c76.html","posts/d95d7e09.html","posts/9c989aa7.html","posts/5c4a3e27.html","posts/f8e09374.html","posts/83f13096.html","posts/8892ccdc.html","posts/d0a69f1e.html","posts/e1962cae.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};