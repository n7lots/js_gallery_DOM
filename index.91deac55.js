document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#largeImg"),t=document.querySelector("#thumbs");t.addEventListener("click",function(n){var r=n.target.closest("a");if(r&&t.contains(r)){n.preventDefault();var a=r.querySelector("img");e.src=r.href,e.alt=(null==a?void 0:a.alt)||""}})});
//# sourceMappingURL=index.91deac55.js.map
