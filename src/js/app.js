import '@scss/style';

import { showMore } from '@js/components/showMore'; showMore();

import { initSliders } from '@js/libs/swiper'; initSliders();

import { menuInit } from '@js/components/menu'; menuInit();

import { tabs } from '@js/components/tabs'; tabs();

import { pageNavigation } from '@js/modules/scroll/scroll'; pageNavigation();

import { lazyMedia } from '@js/libs/lazyLoad'; lazyMedia

import '@js/modules/scroll/watcher';

import { formFieldsInit } from '@js/components/forms/formInit';
formFieldsInit();

import '@js/libs/inputMask';

import { formSubmit } from '@js/components/forms/formSubmit'; formSubmit();

import { webp } from '@js/modules/webp'; webp();

import '@js/modules/dynAdapt';

import { headerScroll } from '@js/modules/scroll/headerScroll'; headerScroll();
