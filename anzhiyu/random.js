var posts=["posts/b92db53e.html","posts/f8e09374.html","posts/d95d7e09.html","posts/d8a440d1.html","posts/3fcfc58a.html","posts/9c989aa7.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};