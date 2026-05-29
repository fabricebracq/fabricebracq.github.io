// Created by iWeb 3.0.4 local-build-20191011

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="1024" height="592" style="height: 592px; left: 178px; position: absolute; top: 253px; width: 1024px; z-index: 1; "><param name="src" value="Media/SPLIT%20TIME%2027mars2012%20version%20US-1.mp4" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="1024" height="592" style="height: 592px; left: 178px; position: absolute; top: 253px; width: 1024px; z-index: 1; "><param name="src" value="SPLITTIMEUS_files/SPLIT%20TIME%2027mars2012%20version%20US.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/SPLIT%20TIME%2027mars2012%20version%20US-1.mp4"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="1024" height="592" data="Media/SPLIT%20TIME%2027mars2012%20version%20US-1.mp4" style="height: 592px; left: 178px; position: absolute; top: 253px; width: 1024px; z-index: 1; "><param name="src" value="Media/SPLIT%20TIME%2027mars2012%20version%20US-1.mp4"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('SPLITTIMEUS_files/SPLITTIMEUSMoz.css')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('Media/transparent.gif');applyEffects()}
