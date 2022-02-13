;(function (doc, tpl, tools) {
    function MyTab (el) {
      this.el = doc.querySelector(el);
      this.data = JSON.parse(this.el.getAttribute('data'));
      this._index = 0;
      
      this.init();
    }
  
    MyTab.prototype.init = function () {
      this._render();
      this._bindEvent();
    }
  
    MyTab.prototype._render = function () {
      var tabWrapper = doc.createElement('div');
      var pageWrapper = doc.createElement('div');
      var oFrag = doc.createDocumentFragment();
  
      tabWrapper.className = 'tab-wrapper';
      pageWrapper.className = 'page-wrapper';
  
      this.data.forEach(function (item, index) {
        tabWrapper.innerHTML += tools.tplReplace(tpl.tab('tab'), {
          tab: item.tab,
          current: !index ? 'current' : ''
        });
  
        pageWrapper.innerHTML += tools.tplReplace(tpl.tab('page'), {
          page: item.page,
          current: !index ? 'current' : ''
        });
      });
  
      oFrag.appendChild(tabWrapper);
      oFrag.appendChild(pageWrapper);
  
      this.el.appendChild(oFrag);
    }
  
    MyTab.prototype._bindEvent = function () {
      
  
    }
  
  
    window.MyTab = MyTab;
  })(document, tpl, tools);