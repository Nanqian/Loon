#!name=滴答清单
#!desc=滴答清单会员解锁 

[Script]
# > 滴答清单

http-response ^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status script-path=https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/ddqd.js, requires-body=true, timeout=10, tag=滴答清单

[MITM]
hostname = ticktick.com, dida365.com