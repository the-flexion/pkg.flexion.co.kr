import styles from './App.module.scss';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-color-tone', 'warm');
  }, []);

  return (
    <div className={styles.app}>
      <header>
        <h1>Sample Page</h1>
      </header>
      <main className="p-6">
        <article className="bg-1 p-6">
          <h2>Text</h2>
          <section className="bg-2 p-6">
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <p className="s1">s1</p>
            <p className="s2">s2</p>
            <p className="s3">s3</p>
            <p className="s4">s4</p>
            <p className="p1">p1</p>
            <p className="p2">p2</p>
            <p className="p3">p3, body</p>
            <p className="p4">p4</p>
            <p className="p4-semibold">p4-semibold</p>
            <p className="p5">p5</p>
            <p className="p5-semibold">p5-semibold</p>
          </section>
        </article>
        <article className="bg-1 p-6">
          <h2>Color</h2>
          <div className="grid">
            <div className="w-3 bg-primary">primary</div>
            <div className="w-3 bg-brand">brand</div>
            <div className="w-3 bg">bg</div>
            <div className="w-3 bg-1">bg-1</div>
            <div className="w-3 bg-2">bg-2</div>
            <div className="w-3 bg-3">bg-3</div>
            <div className="w-3 card">card</div>
            <div className="w-3 inverse bg-fix-black">inverse</div>
            <div className="w-3 bg-disabled">disabled</div>
            <div className="w-3 border">border</div>
            <div className="w-3 border-1">border-1</div>
            <div className="w-3 border-2">border-2</div>
            <div className="w-3 bg-default">default</div>
            <div className="w-3 bg-info">info</div>
            <div className="w-3 bg-link">link</div>
            <div className="w-3 bg-success">success</div>
            <div className="w-3 bg-warning">warning</div>
            <div className="w-3 bg-danger">danger</div>
          </div>
        </article>
        <article className="bg-1 p-6">
          <h2>Grid</h2>
          <section className="bg-2 p-6">
            <h3>Basic 12 Columns (Auto wrap)</h3>
            <div className="grid guide p-5 bg-3">
              <div className="w-4 w-2-tb w-1-mo">w-4 / w-2-tb / w-1-mo</div>
              <div className="w-5 w-4-tb w-1-mo">w-5 / w-4-tb / w-1-mo</div>
              <div className="w-3 w-6-tb w-2-mo">w-3 / w-6-tb / w-2-mo</div>
              <div className="grid w-6 w-4-mo">
                w-6 / w-4-mo
                <div className="w-12 w-6-tb w-4-mo">w-12 / w-6-tb / w-4-mo</div>
                <div className="w-2">w-2</div>
                <div className="w-6 w-4-tb w-2-mo">w-6 / w-4-tb / w-2-mo</div>
                <div className="w-4 w-6-tb w-4-mo">w-4 / w-6-tb / w-4-mo</div>
              </div>
              <div className="w-6 w-4-mo">w-6 / w-4-mo</div>
              <div className="w-full">w-full</div>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Fixed Columns (No wrap)</h3>
            <h4>2 Columns (grid grid-fix-2)</h4>
            <div className="grid guide grid-fix-2 p-5 bg-3">
              <div className="w-1_2">w-1_2</div>
              <div className="w-1_2">w-1_2</div>
            </div>
            <h4>3 Columns (grid grid-fix-3)</h4>
            <div className="grid guide grid-fix-3 p-5 bg-3">
              <div className="w-1_3">w-1_3</div>
              <div className="w-2_3">w-2_3</div>
            </div>
            <h4>4 Columns (grid grid-fix-4)</h4>
            <div className="grid guide grid-fix-4 p-5 bg-3">
              <div className="w-1_4">w-1_4</div>
              <div className="w-3_4">w-3_4</div>
              <div className="w-2_4">w-2_4</div>
              <div className="w-2_4">w-2_4</div>
            </div>
            <h4>5 Columns (grid grid-fix-5)</h4>
            <div className="grid guide grid-fix-5 p-5">
              <div className="w-1_5">w-1_5</div>
              <div className="w-4_5">w-4_5</div>
              <div className="w-2_5">w-2_5</div>
              <div className="w-3_5">w-3_5</div>
            </div>
            <h4>6 Columns (grid grid-fix-6)</h4>
            <div className="grid guide grid-fix-6 p-5">
              <div className="w-1_6">w-1_6</div>
              <div className="w-5_6">w-5_6</div>
              <div className="w-2_6">w-2_6</div>
              <div className="w-4_6">w-4_6</div>
              <div className="w-3_6">w-3_6</div>
              <div className="w-3_6">w-3_6</div>
            </div>
          </section>
        </article>
        <article className="bg-1 p-6">
          <h2>Layout</h2>
          <section className="bg-2 p-6">
            <h3>Border</h3>
            <div className="grid grid-fix-4">
              <div className="w-1_4 border-w-0">border-0</div>
              <div className="w-1_4 border-w-1">border-1</div>
              <div className="w-1_4 border-w-2">border-2</div>
              <div className="w-1_4 border-w-3">border-3</div>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Border-radius</h3>
            <div className="grid grid-fix-4">
              <div className="w-1_4 border-w-1 r-0 p-6">r-0</div>
              <div className="w-1_4 border-w-1 r-1 p-6">r-1</div>
              <div className="w-1_4 border-w-1 r-2 p-6">r-2</div>
              <div className="w-1_4 border-w-1 r-3 p-6">r-3</div>
              <div className="w-1_4 border-w-1 r-4 p-6">r-4</div>
              <div className="w-1_4 border-w-1 r-5 p-6">r-5</div>
              <div className="w-1_4 border-w-1 r-6 p-6">r-6</div>
              <div className="w-1_4 border-w-1 r-full p-6">r-full</div>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Padding</h3>
            <div className="grid grid-fix-4">
              <div className="w-full border-w-1 p-0 bg-info">
                <div className="bg-info-light">p-0</div>
              </div>
              <div className="w-full border-w-1 p-1 bg-info">
                <div className="bg-info-light">p-1</div>
              </div>
              <div className="w-full border-w-1 p-2 bg-info">
                <div className="bg-info-light">p-2</div>
              </div>
              <div className="w-full border-w-1 p-3 bg-info">
                <div className="bg-info-light">p-3</div>
              </div>
              <div className="w-full border-w-1 p-4 bg-info">
                <div className="bg-info-light">p-4</div>
              </div>
              <div className="w-full border-w-1 p-5 bg-info">
                <div className="bg-info-light">p-5</div>
              </div>
              <div className="w-full border-w-1 p-6 bg-info">
                <div className="bg-info-light">p-6</div>
              </div>
              <div className="w-full border-w-1 p-7 bg-info">
                <div className="bg-info-light">p-7</div>
              </div>
              <div className="w-full border-w-1 p-8 bg-info">
                <div className="bg-info-light">p-8</div>
              </div>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Margin</h3>
            <div className="grid grid-fix-4">
              <div className="w-full border-w-1 bg-info">
                <div className="bg-info-light m-0">m-0</div>
              </div>
              <div className="w-full border-w-1 bg-info">
                <div className="bg-info-light m-1">m-1</div>
              </div>
              <div className="w-full border-w-1 bg-info">
                <div className="bg-info-light m-2">m-2</div>
              </div>
              <div className="w-full border-w-1 bg-info">
                <div className="bg-info-light m-3">m-3</div>
              </div>
              <div className="w-full border-w-1 bg-info">
                <div className="bg-info-light m-4">m-4</div>
              </div>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Elevation</h3>
            <div className="grid grid-fix-4">
              <div className="w-1_4 bg p-6">bg</div>
              <div className="w-1_4 bg-1 p-6">bg-1</div>
              <div className="w-1_4 bg-2 p-6">bg-2</div>
              <div className="w-1_4 bg-3 p-6">bg-3</div>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Hide</h3>
            <div className="grid grid-fix-4">
              <div className="w-1_3 hide-pc p-6">hide-pc</div>
              <div className="w-1_3 hide-tb p-6">hide-tb</div>
              <div className="w-1_3 hide-mo p-6">hide-mo</div>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Icon</h3>
            <div className="grid icons">
              <div className="w-2 p-6">
                <i className="icon-apple"></i>apple
              </div>
              <div className="w-2 p-6">
                <i className="icon-arrow-down"></i>arrow-down
              </div>
              <div className="w-2 p-6">
                <i className="icon-arrow-dropdown-up"></i>arrow-dropdown-up
              </div>
              <div className="w-2 p-6">
                <i className="icon-arrow-dropdown"></i>arrow-dropdown
              </div>
              <div className="w-2 p-6">
                <i className="icon-arrow-left"></i>arrow-left
              </div>
              <div className="w-2 p-6">
                <i className="icon-arrow-right"></i>arrow-right
              </div>
              <div className="w-2 p-6">
                <i className="icon-arrow-up"></i>arrow-up
              </div>
              <div className="w-2 p-6">
                <i className="icon-briefcase"></i>briefcase
              </div>
              <div className="w-2 p-6">
                <i className="icon-calendar"></i>calendar
              </div>
              <div className="w-2 p-6">
                <i className="icon-cancel"></i>cancel
              </div>
              <div className="w-2 p-6">
                <i className="icon-car"></i>car
              </div>
              <div className="w-2 p-6">
                <i className="icon-card"></i>card
              </div>
              <div className="w-2 p-6">
                <i className="icon-chart-bar"></i>chart-bar
              </div>
              <div className="w-2 p-6">
                <i className="icon-chart"></i>chart
              </div>
              <div className="w-2 p-6">
                <i className="icon-check-circle-fill"></i>check-circle-fill
              </div>
              <div className="w-2 p-6">
                <i className="icon-check-circle-stroke"></i>check-circle-stroke
              </div>
              <div className="w-2 p-6">
                <i className="icon-check-small"></i>check-small
              </div>
              <div className="w-2 p-6">
                <i className="icon-check"></i>check
              </div>
              <div className="w-2 p-6">
                <i className="icon-checkbox-blank"></i>checkbox-blank
              </div>
              <div className="w-2 p-6">
                <i className="icon-checkbox-multi"></i>checkbox-multi
              </div>
              <div className="w-2 p-6">
                <i className="icon-checkbox"></i>checkbox
              </div>
              <div className="w-2 p-6">
                <i className="icon-clip"></i>clip
              </div>
              <div className="w-2 p-6">
                <i className="icon-close"></i>close
              </div>
              <div className="w-2 p-6">
                <i className="icon-coin"></i>coin
              </div>
              <div className="w-2 p-6">
                <i className="icon-compass"></i>compass
              </div>
              <div className="w-2 p-6">
                <i className="icon-contour"></i>contour
              </div>
              <div className="w-2 p-6">
                <i className="icon-counselor"></i>counselor
              </div>
              <div className="w-2 p-6">
                <i className="icon-currency"></i>currency
              </div>
              <div className="w-2 p-6">
                <i className="icon-danger-fill"></i>danger-fill
              </div>
              <div className="w-2 p-6">
                <i className="icon-danger"></i>danger
              </div>
              <div className="w-2 p-6">
                <i className="icon-dm"></i>dm
              </div>
              <div className="w-2 p-6">
                <i className="icon-download"></i>download
              </div>
              <div className="w-2 p-6">
                <i className="icon-drag"></i>drag
              </div>
              <div className="w-2 p-6">
                <i className="icon-edit"></i>edit
              </div>
              <div className="w-2 p-6">
                <i className="icon-ellipse-stroke"></i>ellipse-stroke
              </div>
              <div className="w-2 p-6">
                <i className="icon-ellipse"></i>ellipse
              </div>
              <div className="w-2 p-6">
                <i className="icon-email"></i>email
              </div>
              <div className="w-2 p-6">
                <i className="icon-excel"></i>excel
              </div>
              <div className="w-2 p-6">
                <i className="icon-exchange-horizontally"></i>
                exchange-horizontally
              </div>
              <div className="w-2 p-6">
                <i className="icon-exchange-vertical"></i>exchange-vertical
              </div>
              <div className="w-2 p-6">
                <i className="icon-expand-down-double"></i>expand-down-double
              </div>
              <div className="w-2 p-6">
                <i className="icon-expand-down"></i>expand-down
              </div>
              <div className="w-2 p-6">
                <i className="icon-expand-left-double"></i>expand-left-double
              </div>
              <div className="w-2 p-6">
                <i className="icon-expand-left"></i>expand-left
              </div>
              <div className="w-2 p-6">
                <i className="icon-expand-right-double"></i>expand-right-double
              </div>
              <div className="w-2 p-6">
                <i className="icon-expand-right"></i>expand-right
              </div>
              <div className="w-2 p-6">
                <i className="icon-expand-up-double"></i>expand-up-double
              </div>
              <div className="w-2 p-6">
                <i className="icon-expand-up"></i>expand-up
              </div>
              <div className="w-2 p-6">
                <i className="icon-export"></i>export
              </div>
              <div className="w-2 p-6">
                <i className="icon-facebook"></i>facebook
              </div>
              <div className="w-2 p-6">
                <i className="icon-favorite-fill"></i>favorite-fill
              </div>
              <div className="w-2 p-6">
                <i className="icon-favorite"></i>favorite
              </div>
              <div className="w-2 p-6">
                <i className="icon-file"></i>file
              </div>
              <div className="w-2 p-6">
                <i className="icon-flag-finish"></i>flag-finish
              </div>
              <div className="w-2 p-6">
                <i className="icon-flag"></i>flag
              </div>
              <div className="w-2 p-6">
                <i className="icon-fordid"></i>fordid
              </div>
              <div className="w-2 p-6">
                <i className="icon-global"></i>global
              </div>
              <div className="w-2 p-6">
                <i className="icon-google"></i>google
              </div>
              <div className="w-2 p-6">
                <i className="icon-gps"></i>gps
              </div>
              <div className="w-2 p-6">
                <i className="icon-hand"></i>hand
              </div>
              <div className="w-2 p-6">
                <i className="icon-handle"></i>handle
              </div>
              <div className="w-2 p-6">
                <i className="icon-help"></i>help
              </div>
              <div className="w-2 p-6">
                <i className="icon-hidden"></i>hidden
              </div>
              <div className="w-2 p-6">
                <i className="icon-home"></i>home
              </div>
              <div className="w-2 p-6">
                <i className="icon-img"></i>img
              </div>
              <div className="w-2 p-6">
                <i className="icon-import"></i>import
              </div>
              <div className="w-2 p-6">
                <i className="icon-info"></i>info
              </div>
              <div className="w-2 p-6">
                <i className="icon-insta"></i>insta
              </div>
              <div className="w-2 p-6">
                <i className="icon-kakao"></i>kakao
              </div>
              <div className="w-2 p-6">
                <i className="icon-layers"></i>layers
              </div>
              <div className="w-2 p-6">
                <i className="icon-link-alt"></i>link-alt
              </div>
              <div className="w-2 p-6">
                <i className="icon-link"></i>link
              </div>
              <div className="w-2 p-6">
                <i className="icon-mail"></i>mail
              </div>
              <div className="w-2 p-6">
                <i className="icon-map"></i>map
              </div>
              <div className="w-2 p-6">
                <i className="icon-menu"></i>menu
              </div>
              <div className="w-2 p-6">
                <i className="icon-minus"></i>minus
              </div>
              <div className="w-2 p-6">
                <i className="icon-more-horizontal"></i>more-horizontal
              </div>
              <div className="w-2 p-6">
                <i className="icon-more"></i>more
              </div>
              <div className="w-2 p-6">
                <i className="icon-naver"></i>naver
              </div>
              <div className="w-2 p-6">
                <i className="icon-new-window"></i>new-window
              </div>
              <div className="w-2 p-6">
                <i className="icon-notifications-stroke"></i>
                notifications-stroke
              </div>
              <div className="w-2 p-6">
                <i className="icon-notifications"></i>notifications
              </div>
              <div className="w-2 p-6">
                <i className="icon-paper"></i>paper
              </div>
              <div className="w-2 p-6">
                <i className="icon-phone-stroke"></i>phone-stroke
              </div>
              <div className="w-2 p-6">
                <i className="icon-phone"></i>phone
              </div>
              <div className="w-2 p-6">
                <i className="icon-pin"></i>pin
              </div>
              <div className="w-2 p-6">
                <i className="icon-plus"></i>plus
              </div>
              <div className="w-2 p-6">
                <i className="icon-pressure"></i>pressure
              </div>
              <div className="w-2 p-6">
                <i className="icon-print"></i>print
              </div>
              <div className="w-2 p-6">
                <i className="icon-pyramid-chart"></i>pyramid-chart
              </div>
              <div className="w-2 p-6">
                <i className="icon-radio-blank"></i>radio-blank
              </div>
              <div className="w-2 p-6">
                <i className="icon-radio-check"></i>radio-check
              </div>
              <div className="w-2 p-6">
                <i className="icon-receipt"></i>receipt
              </div>
              <div className="w-2 p-6">
                <i className="icon-refresh"></i>refresh
              </div>
              <div className="w-2 p-6">
                <i className="icon-ruler"></i>ruler
              </div>
              <div className="w-2 p-6">
                <i className="icon-search"></i>search
              </div>
              <div className="w-2 p-6">
                <i className="icon-setting-stroke"></i>setting-stroke
              </div>
              <div className="w-2 p-6">
                <i className="icon-settings"></i>settings
              </div>
              <div className="w-2 p-6">
                <i className="icon-share"></i>share
              </div>
              <div className="w-2 p-6">
                <i className="icon-show"></i>show
              </div>
              <div className="w-2 p-6">
                <i className="icon-star-fill"></i>star-fill
              </div>
              <div className="w-2 p-6">
                <i className="icon-star"></i>star
              </div>
              <div className="w-2 p-6">
                <i className="icon-tag"></i>tag
              </div>
              <div className="w-2 p-6">
                <i className="icon-temperature"></i>temperature
              </div>
              <div className="w-2 p-6">
                <i className="icon-tiktok"></i>tiktok
              </div>
              <div className="w-2 p-6">
                <i className="icon-time"></i>time
              </div>
              <div className="w-2 p-6">
                <i className="icon-trash"></i>trash
              </div>
              <div className="w-2 p-6">
                <i className="icon-turbine"></i>turbine
              </div>
              <div className="w-2 p-6">
                <i className="icon-upload-cloud"></i>upload-cloud
              </div>
              <div className="w-2 p-6">
                <i className="icon-upload"></i>upload
              </div>
              <div className="w-2 p-6">
                <i className="icon-user-storke"></i>user-storke
              </div>
              <div className="w-2 p-6">
                <i className="icon-user"></i>user
              </div>
              <div className="w-2 p-6">
                <i className="icon-warning"></i>warning
              </div>
              <div className="w-2 p-6">
                <i className="icon-x"></i>x
              </div>
              <div className="w-2 p-6">
                <i className="icon-youtube"></i>youtube
              </div>
              <div className="w-2 p-6">
                <i className="icon-zoom-in"></i>zoom-in
              </div>
              <div className="w-2 p-6">
                <i className="icon-zoom-out"></i>zoom-out
              </div>
            </div>
          </section>
        </article>
        <article className="bg-1 p-6">
          <h2>Button</h2>
          <section className="bg-2 p-6">
            <h3>Default</h3>
            <div>
              <button>default</button>
              <button className="subtle">subtle</button>
              <button className="border">border</button>
              <button className="text">text</button>
              <button>
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button>
                <i className="icon-loading"></i>icon
              </button>
              <button>
                <i className="icon-notification"></i>icon
              </button>
              <button>
                <i className="icon-notification"></i>
              </button>
              <button className="small">default</button>
              <button className="small subtle">subtle</button>
              <button className="small border">border</button>
              <button className="small text">text</button>
              <button className="small">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="small">
                <i className="icon-loading"></i>icon
              </button>
              <button className="small">
                <i className="icon-notification"></i>icon
              </button>
              <button className="small">
                <i className="icon-notification"></i>
              </button>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Primary</h3>
            <div>
              <button className="primary">default</button>
              <button className="primary subtle">subtle</button>
              <button className="primary border">border</button>
              <button className="primary text">text</button>
              <button className="primary">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="primary">
                <i className="icon-loading"></i>icon
              </button>
              <button className="primary">
                <i className="icon-notification"></i>icon
              </button>
              <button className="primary">
                <i className="icon-notification"></i>
              </button>
              <button className="primary small">default</button>
              <button className="primary small subtle">subtle</button>
              <button className="primary small border">border</button>
              <button className="primary small text">text</button>
              <button className="primary small">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="primary small">
                <i className="icon-loading"></i>icon
              </button>
              <button className="primary small">
                <i className="icon-notification"></i>icon
              </button>
              <button className="primary small">
                <i className="icon-notification"></i>
              </button>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Brand</h3>
            <div>
              <button className="brand">default</button>
              <button className="brand subtle">subtle</button>
              <button className="brand border">border</button>
              <button className="brand text">text</button>
              <button className="brand">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="brand">
                <i className="icon-loading"></i>icon
              </button>
              <button className="brand">
                <i className="icon-notification"></i>icon
              </button>
              <button className="brand">
                <i className="icon-notification"></i>
              </button>
              <button className="brand small">default</button>
              <button className="brand small subtle">subtle</button>
              <button className="brand small border">border</button>
              <button className="brand small text">text</button>
              <button className="brand small">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="brand small">
                <i className="icon-loading"></i>icon
              </button>
              <button className="brand small">
                <i className="icon-notification"></i>icon
              </button>
              <button className="brand small">
                <i className="icon-notification"></i>
              </button>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Info</h3>
            <div>
              <button className="info">default</button>
              <button className="info subtle">subtle</button>
              <button className="info border">border</button>
              <button className="info text">text</button>
              <button className="info">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="info">
                <i className="icon-loading"></i>icon
              </button>
              <button className="info">
                <i className="icon-notification"></i>icon
              </button>
              <button className="info">
                <i className="icon-notification"></i>
              </button>
              <button className="info small">default</button>
              <button className="info small subtle">subtle</button>
              <button className="info small border">border</button>
              <button className="info small text">text</button>
              <button className="info small">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="info small">
                <i className="icon-loading"></i>icon
              </button>
              <button className="info small">
                <i className="icon-notification"></i>icon
              </button>
              <button className="info small">
                <i className="icon-notification"></i>
              </button>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Link</h3>
            <div>
              <button className="link">default</button>
              <button className="link subtle">subtle</button>
              <button className="link border">border</button>
              <button className="link text">text</button>
              <button className="link">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="link">
                <i className="icon-loading"></i>icon
              </button>
              <button className="link">
                <i className="icon-notification"></i>icon
              </button>
              <button className="link">
                <i className="icon-notification"></i>
              </button>
              <button className="link small">default</button>
              <button className="link small subtle">subtle</button>
              <button className="link small border">border</button>
              <button className="link small text">text</button>
              <button className="link small">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="link small">
                <i className="icon-loading"></i>icon
              </button>
              <button className="link small">
                <i className="icon-notification"></i>icon
              </button>
              <button className="link small">
                <i className="icon-notification"></i>
              </button>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Warning</h3>
            <div>
              <button className="warning">default</button>
              <button className="warning subtle">subtle</button>
              <button className="warning border">border</button>
              <button className="warning text">text</button>
              <button className="warning">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="warning">
                <i className="icon-loading"></i>icon
              </button>
              <button className="warning">
                <i className="icon-notification"></i>icon
              </button>
              <button className="warning">
                <i className="icon-notification"></i>
              </button>
              <button className="warning small">default</button>
              <button className="warning small subtle">subtle</button>
              <button className="warning small border">border</button>
              <button className="warning small text">text</button>
              <button className="warning small">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="warning small">
                <i className="icon-loading"></i>icon
              </button>
              <button className="warning small">
                <i className="icon-notification"></i>icon
              </button>
              <button className="warning small">
                <i className="icon-notification"></i>
              </button>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Success</h3>
            <div>
              <button className="success">default</button>
              <button className="success subtle">subtle</button>
              <button className="success border">border</button>
              <button className="success text">text</button>
              <button className="success">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="success">
                <i className="icon-loading"></i>icon
              </button>
              <button className="success">
                <i className="icon-notification"></i>icon
              </button>
              <button className="success">
                <i className="icon-notification"></i>
              </button>
              <button className="success small">default</button>
              <button className="success small subtle">subtle</button>
              <button className="success small border">border</button>
              <button className="success small text">text</button>
              <button className="success small">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="success small">
                <i className="icon-loading"></i>icon
              </button>
              <button className="success small">
                <i className="icon-notification"></i>icon
              </button>
              <button className="success small">
                <i className="icon-notification"></i>
              </button>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Danger</h3>
            <div>
              <button className="danger">default</button>
              <button className="danger subtle">subtle</button>
              <button className="danger border">border</button>
              <button className="danger text">text</button>
              <button className="danger">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="danger">
                <i className="icon-loading"></i>icon
              </button>
              <button className="danger">
                <i className="icon-notification"></i>icon
              </button>
              <button className="danger">
                <i className="icon-notification"></i>
              </button>
              <button className="danger small">default</button>
              <button className="danger small subtle">subtle</button>
              <button className="danger small border">border</button>
              <button className="danger small text">text</button>
              <button className="danger small">
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="danger small">
                <i className="icon-loading"></i>icon
              </button>
              <button className="danger small">
                <i className="icon-notification"></i>icon
              </button>
              <button className="danger small">
                <i className="icon-notification"></i>
              </button>
            </div>
          </section>
          <section className="bg-2 p-6">
            <h3>Disabled</h3>
            <div>
              <button className="primary" disabled>
                default
              </button>
              <button className="primary subtle" disabled>
                subtle
              </button>
              <button className="primary border" disabled>
                border
              </button>
              <button className="primary text" disabled>
                text
              </button>
              <button className="danger" disabled>
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="danger" disabled>
                <i className="icon-loading"></i>icon
              </button>
              <button className="danger" disabled>
                <i className="icon-notification"></i>icon
              </button>
              <button className="danger" disabled>
                <i className="icon-notification"></i>
              </button>
              <button className="primary small" disabled>
                default
              </button>
              <button className="primary small subtle" disabled>
                subtle
              </button>
              <button className="primary small border" disabled>
                border
              </button>
              <button className="primary small text" disabled>
                text
              </button>
              <button className="danger small" disabled>
                <i className="icon-share"></i>icon<i className="icon-link"></i>
              </button>
              <button className="danger small" disabled>
                <i className="icon-loading"></i>icon
              </button>
              <button className="danger small" disabled>
                <i className="icon-notification"></i>icon
              </button>
              <button className="danger small" disabled>
                <i className="icon-notification"></i>
              </button>
            </div>
          </section>
        </article>
        <article>
          <h2>Toggle</h2>
          <section className="bg-2 p-6">
            <div>
              <input type="checkbox" className="toggle" />
              <input type="checkbox" className="toggle" checked />
              <input type="checkbox" className="toggle" disabled />
              <input type="checkbox" className="toggle" checked disabled />
            </div>
          </section>
        </article>
        <article>
          <h2>Checkbox</h2>
          <section className="bg-2 p-6">
            <div>
              <input type="checkbox" />
              <span>Default</span>
              <input type="checkbox" checked />
              <span>Checked</span>
              <input type="checkbox" checked className="danger" />
              <span>Danger</span>
              <input type="checkbox" disabled />
              <span>text</span>
              <input type="checkbox" checked disabled />
              <span>Disabled</span>
              <input type="checkbox" name="indeterminate" />
              <span>Indeterminate</span>
              <script>
                document.querySelector( 'input[name="indeterminate"]'
                ).indeterminate = true;
              </script>
            </div>
          </section>
        </article>
        <article>
          <h2>Radio</h2>
          <section className="bg-2 p-6">
            <div>
              <input type="radio" />
              <span>Default</span>
              <input type="radio" checked />
              <span>Checked</span>
              <input type="radio" checked className="danger" />
              <span>Danger</span>
              <input type="radio" disabled />
              <span>Disabled</span>
              <input type="radio" checked disabled />
              <span>Checked Disabled</span>
            </div>
          </section>
        </article>
        <article>
          <h2>Input</h2>
          <section className="bg-2 p-6">
            <div>
              <input type="text" placeholder="default" />
              <div className="with-icon">
                <input type="text" placeholder="icon" />
                <i className="icon-tag"></i>
              </div>
              <div className="with-icon right">
                <input type="text" placeholder="icon" />
                <i className="icon-search"></i>
              </div>
              <input type="text" placeholder="danger" className="danger" />
              <input type="text" placeholder="disabled" disabled />
            </div>
          </section>
        </article>
        <article>
          <h2>Gap Test</h2>
          <section className="bg-2 p-6">
            <div>
              <input type="text" placeholder="default" />
              <button className="small">
                <i className="icon-search"></i>우편번호 검색
              </button>

              <input type="checkbox" checked />
              <span>Checked</span>

              <input type="checkbox" className="toggle" />
            </div>
          </section>
        </article>
        <article>
          <h2>Label</h2>
          <section className="bg-2 p-6">
            <div className="grid grid-fix-3">
              <div className="w-1_3">
                <label htmlFor="label1">Default </label>
                <input id="label1" type="text" placeholder="default" />
              </div>
              <div className="w-1_3">
                <label htmlFor="label2" className="required">
                  Required{' '}
                </label>
                <input
                  id="label2"
                  type="text"
                  placeholder="Required"
                  required
                />
              </div>
              <div className="w-1_3">
                <label htmlFor="label3" className="bold required">
                  Bold Required{' '}
                </label>
                <input
                  id="label3"
                  type="text"
                  placeholder="Bold Required"
                  required
                />
              </div>
            </div>
          </section>
        </article>
        <article>
          <h2>File</h2>
          <section className="bg-2 p-6">
            <input type="file" />
            <input type="file" />
            <button className="file-reset"></button>
            <input type="file" disabled />
          </section>
        </article>
        <article>
          <h2>Textarea</h2>
          <section className="bg-2 p-6">
            <textarea placeholder="placeholder"></textarea>
            <div className="with-icon">
              <textarea placeholder="placeholder"></textarea>
              <i className="icon-global"></i>
            </div>
            <textarea placeholder="resize none"></textarea>
            <textarea placeholder="danger" className="danger"></textarea>
            <textarea placeholder="disabled" disabled></textarea>
          </section>
        </article>
        <article>
          <h2>Select</h2>
          <section className="bg-2 p-6">
            <div>
              <select>
                <option>default</option>
                <option>Seoul</option>
                <option>Tokyo</option>
              </select>
              <div className="with-icon">
                <select>
                  <option>default</option>
                  <option>Seoul</option>
                  <option>Tokyo</option>
                </select>
                <i className="icon-global"></i>
              </div>
              <select required>
                <option value="" disabled selected>
                  placeholder
                </option>
                <option>Seoul</option>
                <option>Tokyo</option>
              </select>
              <select disabled>
                <option>default</option>
                <option>Seoul</option>
                <option>Tokyo</option>
              </select>
            </div>
          </section>
        </article>
        <article>
          <h2>Tabs</h2>
          <section className="bg-2 p-6">
            <h3>Default</h3>
            <ul className="tabs">
              <li className="on">
                <a href="#">
                  <i className="icon-heart"></i> Tab1
                </a>
              </li>
              <li>
                <a href="#">Tab2</a>
              </li>
              <li>
                <a href="#">Tab3</a>
              </li>
            </ul>
          </section>
          <section className="bg-2 p-6">
            <h3>Fix</h3>
            <ul className="tabs fix">
              <li className="on">
                <a href="#">
                  <i className="icon-heart"></i> Tab1
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-heart primary"></i> Tab2
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-heart danger"></i> Tab3
                </a>
              </li>
            </ul>
          </section>
        </article>
        <article>
          <h2>Table</h2>
          <section className="bg-2 p-6">
            <h3>Default</h3>
            <table>
              <colgroup>
                <col width="40" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="100" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>제목</th>
                  <th>이메일</th>
                  <th>역할</th>
                  <th>이름</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="bg-2 p-6">
            <h3>border</h3>
            <table className="border">
              <colgroup>
                <col width="40" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="100" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>제목</th>
                  <th>이메일</th>
                  <th>역할</th>
                  <th>이름</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="bg-1 p-6">
            <h3>border striped (bg-1)</h3>
            <table className="border striped">
              <colgroup>
                <col width="40" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="100" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>제목</th>
                  <th>이메일</th>
                  <th>역할</th>
                  <th>이름</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="bg-2 p-6">
            <h3>border striped (bg-2)</h3>
            <table className="border striped">
              <colgroup>
                <col width="40" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="100" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>제목</th>
                  <th>이메일</th>
                  <th>역할</th>
                  <th>이름</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="bg-3 p-6">
            <h3>border striped (bg-3)</h3>
            <table className="border striped">
              <colgroup>
                <col width="40" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="*" />
                <col width="100" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>제목</th>
                  <th>이메일</th>
                  <th>역할</th>
                  <th>이름</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                  <td>
                    <button className="link text">편집하기</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
        <article>
          <h2>Badge</h2>
          <section className="bg-2 p-6">
            <div className="grid grid-fix-5">
              <div className="w-1_5">
                <i className="icon-notification"></i>
                <i className="badge-icon"></i>
              </div>
              <div className="w-1_5">
                <i className="icon-notification"></i>
                <i className="badge-number">9</i>
              </div>
              <div className="w-1_5">
                <i className="icon-notification"></i>
                <i className="badge-number">32</i>
              </div>
              <div className="w-1_5">
                <i className="icon-notification"></i>
                <i className="badge-number">999+</i>
              </div>
              <div className="w-1_5">
                text
                <i className="badge-text">32</i>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
