import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({

  shopify: {
    storeDomain: import.meta.env.VITE_DOMAIN,
    storefrontToken: import.meta.env.VITE_STOREFRONT_ACCESS_TOKEN,
    storefrontApiVersion: '2023-01',
  },
});
