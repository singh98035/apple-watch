import React from "react";
import "./sideBar.css";
function SideBar()
{
    return <div className="sideBar">
        <img className="list-icon"
         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAYCAYAAACfpi8JAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACYSURBVHgB7da9DYMwEMXxd54gI9BlgSyRKTJDNiAbsEKWgCWYACHBCB4A+YGoaLD4ONnN/Sq7veKvJ03bfwhWAB/IYxSwlLrthuVTIC/vAMl1iQ16xzB9l8eIfDyD/GCMOUmUyrrW8f16/nGRI0KpkPeCkAo3KJaVHjdoldXqaExyknCzRuurVdYjovVNvFn365tys0brOwMsDku7sedF5AAAAABJRU5ErkJggg==" 
         alt="" 
         />

         <div className="social-media-icon">
             <img className="facebook"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADVSURBVHgB7ZOxDcIwEEX/RRQUFBnBFSyQAaBNxQhskBFgE0agQCDK9ASFllDgETyBDwNCOLaDohSp8jt/37O/7TOhQbuyjMd6kmnmJYEEwPFnhhSgFYWgU1FlGrT5FXvywcOlWhFji38iyMjzGGu00Mge7M/3uYknAnU5mV2+AzZRa2AUGYhdhmWazBau60X1RTLktgDD6h+kY3F7WOvE4Udn6TrmVklYBWhYXziG6haVuoJ4R7Xz0+t87hnNb2BVcxjXWpM3NHieJtMunRPWAA5gz+ATjk07l6TAL5oAAAAASUVORK5CYII=" 
             alt="" 
             />
             <img className="twitter"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAWCAYAAAAxSueLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgBtVbNThpRFP7OHalt0gVv0HGDNWlSScWkK3ELaSJPUPoETZ8AeAP7BNgnsKYxdAeumlQNuDLSzfQNZtNUwbmn585AZRCGK+C3mvt3vnvu+c45Q1gAh+12evX2WRlEOwClAfZZ01FxO3MQ2/fj0i293fDIDI5/djeBHorbrzq2RA0xwCmnKZ/uhGWPNUpwsEmM92B9VMi93A/JGmfdOgN7N/0ga26wIFEMYrdT3MpkzSuowYQ5lF5NOW3xsjzLAFJOxYZILHuK0Pl+dnWI66cR2QjSpFBvnHfr5p2nmgDysAK5zNgLNNXMiw09u4gZY5TFy2bj/FdlCqkLO/gmNCKYUAv/BSIetRMOtZj5REO1FLNPiiRenMYsELzCm8zacBh61kv98UQxnxKO5Ymo4hA3o0tZEBkw/NFhSPYkeN6McoU9LBcxspXBFU7E549YMhg6poVIjRoHeARo5q/3yEK1JMdsDrD3LrfRukdmYMoJU/BhWXETQbXG51R8sPJisMnHgrjuBbVEMo3b3yah5dNO2lMgOVmbVGNpfOL49KpqcgrzU3mFrfW1SSvjtRHF3Ho1ih1amIPopq93p61S0lFTG+VJqrCDNE7sDuugFdld91UmyV1YIfJoVi8kU4SVg7B6iBd50xbwAEiV+Nxz/lZL2exMBUed2nReR1UlgjuWZL6QfOn1ed+ms8fIRvHt9DLvgKTlqNeSBu5gm09kfmb0RQDujFcGW/wDManzolHXq+8AAAAASUVORK5CYII=" 
             alt="" 
             />
             <img className="linkedin"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF9SURBVHgB7ZRNTsJAFMffm/KxcFNvUDYYEhdt/Ejc4VKNCZwAPIFHEE4gnMArkBjUJTsTxISFiREXjjcoCxOhdJ5T1NhpkUQZwqb/pHl57/1nfpn2dQASaRZGC1e9p5IMFUR038d+vbxX4KBRCrB9P6giwUWoxEfGm1N2HBc0iSl0gkqkb2W8tRJoFFNTeo0aBPoclgVET9QklIcqreOdQgc0KjY017ePlpdmNpJwdcNWIuWEl3fPxRQjZXAOtvInQWx3BzYz4DTaC9YYSGdyK1t+DlNGF5Fav/1SqXDCGFlEUI14pkCBaCKR0rvpDfoCqPGZ0VeVzGCPbNootbsP+0e7m32FAQtIADTmtE1kmfNocSHgj6aTPetyKMpT2hqBxEeenzvc3pBPfl2+1Gbck9EHJCGUwRgb6VrMhGRpAwoEHs7LTs4NpnTemoWAzMi+xKu0POB/lAAT4J+lXN7gQ5+Q6jONkwkXKab0xjgcxowkmgRofqcCRAcSLVMf1JuE7Ap16RwAAAAASUVORK5CYII=" 
             alt="" 
             />
         </div>
    </div>
}

export default SideBar;