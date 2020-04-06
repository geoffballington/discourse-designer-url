import { withPluginApi } from 'discourse/lib/plugin-api'

function initializePlugin(api) {

api.decorateWidget('poster-name:after', helper => {
  let h = helper.h,
  attrs = helper.attrs;
  if(attrs.userCustomFields && attrs.userCustomFields.storeUrl){
    return helper.h('a.designer-url', {href: attrs.userCustomFields.storeUrl },helper.h('div.is-designer', 'Designer'));       
  } else {}
});
}
export default {
  name: 'isDesigner',
  initialize: function() {
    withPluginApi('0.1', api => initializePlugin(api))
  }
}