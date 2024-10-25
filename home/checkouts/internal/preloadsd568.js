
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills-legacy.D6S_e7yr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app-legacy.10VALgnJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePage-legacy.DJ-MVA6K.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection-legacy.Cl-hL5x8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal-legacy.D8Niw1zR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods-legacy.BK63CbOZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup-legacy.DxTCLixd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown-legacy.CRXB11fr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture-legacy.BGOIBSfn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo-legacy.BsgzfIAx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PurchaseOptionsAgreement-legacy.D2Mfww-_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo-legacy.DGcbPndU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks-legacy.B2pLS7fL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment-legacy.TIXRGrQZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePageModal-legacy.BouKfa6Q.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin-legacy.kQkaPto2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section-legacy.opB2Jxzj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk-legacy.BsRJ5PGx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLoginLoader-legacy.BSfFE7zX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage-legacy.CMCUB5D-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection-legacy.LTnv8tDD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context-legacy.B78Lhsm7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions-legacy.DjGMakOF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact-legacy.yPyInPfW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList-legacy.BF20qhIm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch-legacy.DPMEuICb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.BbUT2jja.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  