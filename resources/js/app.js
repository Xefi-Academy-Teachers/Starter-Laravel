import './bootstrap';
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import 'flowbite/dist/flowbite'

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

const dateRangePickerEl = document.getElementById('daterangepicker');
new DateRangePicker(dateRangePickerEl, {
    orientation: 'bottom',
    language: 'fr',
    weekStart: 1,
});
