var tools = (function () {
  function tplReplace (tpl, replaceObj) {

    console.log(tpl,'1')
    console.log(replaceObj)

    return tpl.replace(/\{\{(.*?)\}\}/g, function (node, key) {
      console.log(key,'77')
      return replaceObj[key.trim()];
    })
  }

  return {
    tplReplace: tplReplace
  }
})();