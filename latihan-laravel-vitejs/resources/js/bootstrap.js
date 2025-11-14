import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Import Trix CSS if available
try {
	import('trix/dist/trix.css');
	import('trix');
} catch (e) {
	// ignore if not installed yet
}

// SweetAlert2 and ApexCharts will be imported where used in components
