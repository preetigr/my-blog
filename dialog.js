function album songs(){
					this.alert= function(dialog){
					var winW= window.innerWidth;
					var winH= window.innerHeight;
					var dialogoverlay= document.getElementById('dialogoverlay');
					var dialogoverlay= document.getElementById('dialogbox');
					dialogoverlay.style.display= "block";
					dialogoverlay.style.height= winH+"px";
					dialogoverlay.style.left= (winW/2) - (550*.5)+"px";
					dialogoverlay.style.top= "100px";
					dialogoverlay.style.display= "block";
					document.getElementById('dialogboxhead').innerHTML= "Acknowledge This Message";
					document.getElementById('dialogboxbody').innerHTML= dialog;
					document.getElementById('dialogboxfoot').innerHTML= '<button onclick="Alert.ok()">OK</button>'
					}
					this.ok= function(){
					document.getElementById('dialogbox').style.display= "none";
					document.getElementById('dialoverlay').style.display= "none";
					}
					}
					var alert= new Album Songs();
