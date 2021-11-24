// Vue Component Install
// import IconFont from '@/components/IconFont'
// import OptionsMenu from '@/components/OptionsMenu'
import IconFont from './IconFont'

const component = {
  install: function (app) {
    app.component(IconFont.name, IconFont)
  }
}

export default component
