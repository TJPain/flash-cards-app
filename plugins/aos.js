import AOS from 'aos'

import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line
  app.AOS = new AOS.init({
    // disable: 'phone',
    disable: window.innerWidth < 768,
    duration: 800,
  })
}
