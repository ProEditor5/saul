s="e.mp4";
b=true;
a=()=>{
	w=Math.random()*1800;h=Math.random()*900;e=window.open("","",`left=${w},top=${h},width=377,height=220`);
	e.document.write(`
		<body onclick="e()"style="margin:0;overflow:hidden">
			<video loop muted autoplay style="width:100%">
				<source src="${s}" type="video/mp4">
			</video>
			<script>
				playing=false;
				e=()=>{if(!playing){playing=true;f=new Audio('${s}');
				f.loop=true;f.play();}}
			</script>
		<body>
	`);
	e.addEventListener("beforeunload",()=>{
		a();a();
	})
};
c=()=>{
	t=document.createElement("input");
  	t.value=window.location.href;
  	document.body.appendChild(t);
  	t.select();
	t.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(t.value);
 	document.body.removeChild(t);

	if(b){
		b=false
		p=document.getElementById("p");
		v=p.innerHTML.split('<br>');
		p.innerHTML = [v[0], '👍 '+v[1]].join('<br>');
	}
}
a();
