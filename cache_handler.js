window.addEventListener("load",function(a){window.applicationCache.addEventListener("cached",function(a){isUserLogged?$("#cacheDialog").css("display","block"):window.location.reload()},!1),window.applicationCache.addEventListener("updateready",function(a){isUserLogged?$("#cacheDialog").css("display","block"):window.location.reload()},!1),window.applicationCache.addEventListener("obsolete",function(a){isUserLogged?$("#cacheDialog").css("display","block"):window.location.reload()},!1),window.applicationCache.addEventListener("noupdate",function(a){isUserLogged||(clearInterval(globalCacheUpdateInterval),globalCacheUpdateInterval=setInterval(function(){window.applicationCache.update()},3e5))},!1)},!1);