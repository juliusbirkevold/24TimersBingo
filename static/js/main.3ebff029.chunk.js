(this.webpackJsonp24timersbingo=this.webpackJsonp24timersbingo||[]).push([[0],{14:function(A,e,t){},15:function(A,e,t){},17:function(A,e,t){},18:function(A,e,t){"use strict";t.r(e);var n=t(1),o=t(8),i=t.n(o),s=(t(14),t(2)),r=t(3),a=t(4),l=t(6),c=t(5),b=(t(15),t(0)),d=function(A){Object(l.a)(t,A);var e=Object(c.a)(t);function t(){var A;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(A=e.call.apply(e,[this].concat(o))).handleClick=function(){A.props.handleCellChange(A.props.id)},A.bingoCellColor=function(){return console.log(Math.floor(A.props.id/4)),A.props.id%2===(Math.floor(A.props.id/4)%2===1?1:0)?"cell cell-odd":"cell"},A}return Object(r.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{className:this.bingoCellColor()+(this.props.clicked?" cell-selected":""),onClick:this.handleClick,children:Object(b.jsx)("p",{children:this.props.content})})}}]),t}(n.Component),g=d,u=(t(17),t.p+"static/media/github.1dd51261.svg"),j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABjwAAAHeCAMAAAAYbFI+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAYBQTFRFAAAA1+vn3e3q5O/s6PLv7PPx8PXz9Pb19/j3+vn5+Pj49ff28vb07vTy6vLw5vHu4O7r3e3oz+/f2urk4e7r7/Xz9vf3+fn58/b15O/t3evn9/j45e/t2urn7fTy5/Hv9Pf23evp8PX01+fn8fX03+3q5fDt8vb14u7r2ezm6fLv3evo5vHt9ff37vTz6+vt6+vs2dndg4aTVlts2Nnd6fLw2Njc19fbgIORf4OQ5ubo5eXn09TY0tPX4+7s6/Px3ezq7/Tz7PPy4u7t9vj39Pb2+fn4+fj45/Hu6/Pw4+/sxcbLwMLH3NzgoKOshYiVzs/UcnaFp6mydnqIzs7TubrBzc7Tj5Gdn6Ksp6qy1dXa1dban6KrqKqzzM3S1tban6Grqauz1tbb1tfbn6Gqqau0zMzRy8zRnqCqqay019fc19jcqqy0+Pf4nqCpqqy1ysvQ0dLWqq212Nncq621urzCq6227OzudHeGrK62ZGl4j5KdYmd2YmZ26PHv6vPwfJtV1gAAAIB0Uk5TAECQ8P///////////////8BwEDCw//////CA//9g////gP8g/6D//9BQ/3D////////////////////////g/5D//9D////////g//////////////////////////////////////////////////////////////////////+X7+8IAAAQtUlEQVR4nO3dCXcU2XkGYEtIQEkgCUkwYpAYhCSgZ3NseWzHccATMDCTZOLs+77v++osfz1iEWhroaWq3nu7n+cH9Ll9v3Pe99yuqq6vfQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPo1MXlhavripcvNQTOzV67OzS9cW0yvEIBiLC1PXb9xqDGO9t7K9M330wsGIGlxeW7lhK2x362rq2vpxQPQv8m52TP1xh7Xby6lvwUAvVm4fd7eeOsDRxCA0Tc53V5xvLay6lI6wOha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",p=t(9),h=function(A){Object(l.a)(t,A);var e=Object(c.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).state={text:[],chosen_cells:[],bingo_id:0,bingo_rows:[],bingo_cols:[],bingo_diagonal_down:!1,bingo_diagonal_up:!1,is_bingo:!1,showRules:!1},n.handleCellChange=function(A){var e=n.state.chosen_cells;e[A%4][Math.floor(A/4)]=!e[A%4][Math.floor(A/4)];for(var t=n.state.bingo_rows,o=n.state.bingo_cols,i=n.state.bingo_diagonal_down,s=n.state.bingo_diagonal_up,r=!1,a=e.every((function(A,e){return A.every((function(A){return A}))})),l=0;l<4;l++)if(!n.state.bingo_cols[l]){for(var c=!0,b=0;b<4;b++)e[l][b]||(c=!1);c&&(o[l]=!0,r=!0)}if(!i){for(var d=!0,g=0;g<4;g++)e[g][g]||(d=!1);d&&(i=!0,r=!0)}if(!s){for(var u=!0,j=0;j<4;j++)e[3-j][j]||(u=!1);u&&(s=!0,r=!0)}for(var p=0;p<4;p++)if(!n.state.bingo_rows[p]){for(var h=!0,f=0;f<4;f++)e[f][p]||(h=!1);h&&(t[p]=!0,r=!0)}r=!a&&r;var v={text:n.state.text,chosen_cells:e,bingo_rows:t,bingo_cols:o,bingo_diagonal_down:i,bingo_diagonal_up:s,is_bingo:r,is_full_bingo:a,bingo_id:n.state.bingo_id};n.setState(v),localStorage.setItem("bingoState",JSON.stringify(v))},n.generateBoard=function(){for(var A=p.options,e=t.generatePicks(A,A.length),o=[],i=0;i<4;i++){o[i]=[];for(var s=0;s<4;s++)o[i][s]=!1}var r={text:e,bingo_id:n.state.bingo_id+16,chosen_cells:o,bingo_rows:[],bingo_cols:[],bingo_diagonal_down:!1,bingo_diagonal_up:!1};localStorage.setItem("bingoState",JSON.stringify(r)),n.setState(r)},n.handleCellChange=n.handleCellChange.bind(Object(a.a)(n)),n}return Object(r.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("bingoState")?this.setState(JSON.parse(localStorage.getItem("bingoState"))):this.generateBoard(),document.title="24 Timers bingo"}},{key:"componentDidUpdate",value:function(){localStorage.setItem("bingoState",JSON.stringify(this.state))}},{key:"render",value:function(){var A=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:this.state.is_full_bingo?"popup show":"popup",onClick:function(){return A.setState({is_full_bingo:!1})},children:[Object(b.jsxs)("div",{className:"bingotext",children:[Object(b.jsx)("img",{src:j,alt:"Abakus logo"}),Object(b.jsx)("img",{src:j,alt:"Abakus logo"}),Object(b.jsx)("img",{src:j,alt:"Abakus logo"})]}),Object(b.jsx)("div",{className:"bingotext",children:Object(b.jsx)("span",{children:"Gratulerer, du har vunnet Bingo!"})}),Object(b.jsx)("p",{children:"(Trykk for \xe5 lukke)"})]}),Object(b.jsxs)("div",{className:this.state.is_bingo?"popup show":"popup",onClick:function(){return A.setState({is_bingo:!1})},children:[Object(b.jsxs)("div",{className:"bingotext",children:[Object(b.jsx)("img",{src:j,alt:"Abakus logo"}),Object(b.jsx)("span",{children:"Bingo!"}),Object(b.jsx)("img",{src:j,alt:"Abakus logo"})]}),Object(b.jsx)("p",{children:"(Trykk for \xe5 lukke)"})]}),Object(b.jsxs)("div",{className:this.state.showRules?"popup show":"popup",onClick:function(){return A.setState({showRules:!1})},children:[Object(b.jsxs)("div",{className:"textWindow",children:[Object(b.jsx)("p",{children:"Regler"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"1) Du har 24 timer til \xe5 utf\xf8re s\xe5 mange utfordringer som mulig"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"2) Det handler om \xe5 v\xe6re taktisk, premier blir bestemt etter antall rader. Radene er kun vertikale og horisontale"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"3) Den endelige bingoen f\xe5r du n\xe5r du har fylt brettet, og gir selvf\xf8lgelig best premie! Dere som g\xe5r for stor utf\xf8ring b\xf8r dokumentere s\xe5 mye som mulig, siden vi vil verifisere de beste."}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"4) Vinneren er f\xf8rstemann til \xe5 fylle hele brettet, eller han/hun som har kommer lengst!"})]}),Object(b.jsx)("p",{children:"(Trykk for \xe5 lukke)"})]}),Object(b.jsxs)("div",{className:"App-header",children:[Object(b.jsxs)("span",{className:"logo",children:[Object(b.jsx)("img",{src:j,alt:"Abakus logo"}),Object(b.jsx)("span",{children:" 24 Timersbingo"})]}),Object(b.jsx)("div",{className:"rules",children:Object(b.jsx)("button",{onClick:function(){return A.setState({showRules:!0})},children:"Regler"})}),Object(b.jsx)("div",{className:"github",children:Object(b.jsx)("a",{href:"https://github.com/juliusbirkevold/24TimersBingo",children:Object(b.jsx)("img",{src:u,alt:"Github"})})})]}),Object(b.jsx)("div",{className:"bingoBoard",children:this.state.text.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t++,Object(b.jsx)(g,{id:t-1,content:e,clicked:A.state.chosen_cells[(t-1)%4][Math.floor((t-1)/4)],handleCellChange:A.handleCellChange},A.state.bingo_id+t)}))})]})}}],[{key:"generatePicks",value:function(A,e){for(var t=[],n=0;n<16;n++){for(var o=Math.floor(Math.random()*e);t.indexOf(A[o])>-1;)o=Math.floor(Math.random()*e);t[n]=A[o]}return t}}]),t}(n.Component),f=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(f,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))},9:function(A){A.exports=JSON.parse('{"options":["Ta et bad, saltvann/pirbadet","24 enheter, teller med ting man kj\xf8per p\xe5 LB som shots osv.","Vinne i beerpong","Snu 12 ting p\xe5 et annet kontor","120 pushups totalt","Kyss 6 personer","Chugg en halvliter p\xe5 10 sek, kan v\xe6re i kopp","12 (donuts, bananer, burgere) kan kombineres","Spanderer en \xf8l p\xe5 en som jobber p\xe5 LB","Send inn bilde til baksida til readme","Ta bilde med en vekter/politi","Ta bilde med foreleser","Finn fram til LB","Spis 2 chilier p\xe5 30 sek, kan ha chilier i baren p\xe5 LaBamba? Gj\xf8re det bare p\xe5 LaBamba?","Bestill 2 drinker, 2 \xf8l og 2 shots p\xe5 LaBamba","Del en planke med opp til 5 tjommier p\xe5 LaBamba"]}')}},[[18,1,2]]]);
//# sourceMappingURL=main.3ebff029.chunk.js.map