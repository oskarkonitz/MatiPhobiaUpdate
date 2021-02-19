// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"SRD_RemoveFadedContinue","status":true,"description":"This Plugin removes the faded out \"continue\" choice from\r\nthe choices at the title screen.","parameters":{}},
{"name":"SRD_AutoUpdater","status":true,"description":"Allows developers to set up automatic updates to occur whenever a player plays the game.","parameters":{"Update Text URL":"https://raw.githubusercontent.com/oskarkonitz/MatiPhobiaUpdate/main/Main.txt","Initial Version":"1.00","== Version Options ==":"","Draw Version":"true","Version Format":"v%1","Version Text X":"Graphics.boxWidth - textWidth - 8","Version Text Y":"Graphics.boxHeight - textHeight - 24","Version Text Font":"GameFont","Version Text Color":"#FFFFFF","Version Text Size":"28","Version Outline Size":"3","Version Italic":"true"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"SRD_PressStart","status":true,"description":"Shows a \"Press Start\" styled phrase and waits for input before opening the Command Window on the Title Screen.","parameters":{"Shown Text":"Naciśnij, aby rozpocząć","Start Condition":"Input.isPressed('ok') || TouchInput.isPressed()","Fading Speed":"4","== Positioning ==":"","Alignment":"","X Position":"18","Y Position":"Graphics.height * (3/4)","Max Width":"Graphics.width","Max Height":"48","== Text Options ==":"","Font":"GameFont","Font Size":"34","Outline Size":"4","Font Color":"#FFFFFF","Outline Color":"black"}},
{"name":"SRD_MasterVolume","status":true,"description":"Adds an option in the Options menu to change the game's master volume.","parameters":{"Option Name":"Master Volume","Default Value":"100","Option Position":"AboveVol"}},
{"name":"SRD_GameUpgrade","status":true,"description":"Enables more customization over the core mechanics of one's game while also providing additional functions for future plugins.","parameters":{"Game Window":"====================================","Game Reconstruction (1.5.X & below)":"true","Game Resolution":"{\"Width\":\"816\",\"Height\":\"624\"}","Screen Resolution":"{\"Width\":\"\",\"Height\":\"\"}","Minimum Resolution":"{\"Width\":\"408\",\"Height\":\"312\"}","Maximum Resolution":"{\"Width\":\"\",\"Height\":\"\"}","Window Title":"","Allow Resize":"true","Initial Fullscreen":"false","Show Frame":"true","Always on Top":"false","Core Defaults":"====================================","Audio Master Volume":"100","Video Master Volume":"100","Image Cache Limit":"30","Decrypter Ignore List":"[\"system/Window.png\"]","JsonEx Max Depth":"100","Retry Intervals":"[\"500\",\"1000\",\"3000\"]","HTML Settings":"====================================","Background Color":"#000000","Image Rendering":"auto","PIXI Settings":"====================================","Garbage Collection Mode":"Automatic","Round Pixels":"false","Scale Mode":"Nearest","Wrap Mode":"Clamp"}},
{"name":"SRD_PreloaderCore","status":true,"description":"Allows developers to preload specific audio and images before running the game through a new pre-title scene.","parameters":{"Custom Background":"MadeWithMv","Loading Text":"Ładowanie %1","Complete Text":"Pomyślnie załadowano!","Use Fade Transitions":"true","Load Font Size":"28","Gauge Back Color":"rgba(0, 0, 0, 0.4)","Gauge Main Color":"rgba(255, 0, 0, 0.4)","Custom Preloads":"[]","Audio Preloads":"====================================","Cache Audio":"bgm, bgs, me","Preload BGM":"important","Preload BGS":"none","Preload ME":"important","Preload SE":"none","Image Preloads":"====================================","Preload System":"none","Preload Animations":"none","Preload Battlebacks1":"none","Preload Battlebacks2":"none","Preload Characters":"none","Preload Enemies":"none","Preload Faces":"important","Preload Parallaxes":"none","Preload Pictures":"none","Preload SV_Actors":"none","Preload SV_Enemies":"none","Preload Tilesets":"important","Preload Titles1":"none","Preload Titles2":"none"}}
];
