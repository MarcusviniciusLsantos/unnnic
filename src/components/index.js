import Vue from 'vue';
import input from './Input/Input.vue';
import button from './Button/Button.vue';
import sidebar from './Sidebar/Sidebar.vue';
import sidebarItem from './Sidebar/SidebarItem.vue';
import sidebarMenu from './Sidebar/SidebarMenu.vue';
import sidebarPrimary from './Sidebar/SidebarPrimary.vue';
import table from './Table/Table.vue';
import tableRow from './Table/TableRow.vue';
import dropdown from './Dropdown/Dropdown.vue';
import dropdownItem from './Dropdown/DropdownItem.vue';
import avatarIcon from './AvatarIcon/AvatarIcon.vue';
import icon from './Icon.vue';
import iconSvg from './Icon-svg.vue';
import toolTip from './ToolTip/ToolTip.vue';
import card from './Card/Card.vue';
import cardCompany from './Card/CardCompany.vue';
import checkbox from './Checkbox/Checkbox.vue';
import radio from './Radio/Radio.vue';
import languageSelect from './Dropdown/LanguageSelect.vue';
import modal from './Modal/Modal.vue';
import call from '../utils/call';
import select from './Select/Select.vue';
import selectItem from './Select/SelectItem.vue';
import autocomplete from './Input/Autocomplete.vue';
import tag from './Tag/Tag.vue';
import accordion from './Accordion/Accordion.vue';
import indicator from './Indicator/Indicator.vue';
import skeletonLoading from './SkeletonLoading/SkeletonLoading.vue';
import carousel from './Carousel/Carousel.vue';
import label from './Label/Label.vue';
import tab from './Tab/Tab.vue';
import banner from './Banner/Banner.vue';
import comment from './Comment/Comment.vue';
import datePicker from './DatePicker/DatePicker.vue';
import breadcrumb from './Breadcrumb/Breadcrumb.vue';
import Switch from './Switch/Switch.vue';
import Slider from './Slider/Slider.vue';
import DataArea from './DataArea/DataArea.vue';

const components = {
  unnnicInput: input,
  unnnicButton: button,
  unnnicSidebar: sidebar,
  unnnicSidebarItem: sidebarItem,
  unnnicSidebarMenu: sidebarMenu,
  unnnicSidebarPrimary: sidebarPrimary,
  unnnicTable: table,
  unnnicTableRow: tableRow,
  unnnicAvatarIcon: avatarIcon,
  unnnicIcon: icon,
  unnnicIconSvg: iconSvg,
  unnnicDropdown: dropdown,
  unnnicDropdownItem: dropdownItem,
  unnnicToolTip: toolTip,
  unnnicCard: card,
  unnnicCardCompany: cardCompany,
  unnnicCheckbox: checkbox,
  unnnicRadio: radio,
  unnnicLanguageSelect: languageSelect,
  unnnicModal: modal,
  unnnicSelect: select,
  unnnicSelectItem: selectItem,
  unnnicAutocomplete: autocomplete,
  unnnicTag: tag,
  unnnicAccordion: accordion,
  unnnicIndicator: indicator,
  unnnicSkeletonLoading: skeletonLoading,
  unnnicCarousel: carousel,
  unnnicLabel: label,
  unnnicTab: tab,
  unnnicBanner: banner,
  unnnicComment: comment,
  unnnicDatePicker: datePicker,
  unnnicBreadcrumb: breadcrumb,
  unnnicSwitch: Switch,
  unnnicSlider: Slider,
  unnnicDataArea: DataArea,
};

Object.keys(components).forEach((name) => {
  Vue.component(name, components[name]);
});

export const unnnicInput = input;
export const unnnicButton = button;
export const unnnicSidebar = sidebar;
export const unnnicSidebarItem = sidebarItem;
export const unnnicSidebarMenu = sidebarMenu;
export const unnnicSidebarPrimary = sidebarPrimary;
export const unnnicTable = table;
export const unnnicTableRow = tableRow;
export const unnnicDropdown = dropdown;
export const unnnicDropdownItem = dropdownItem;
export const unnnicAvatarIcon = avatarIcon;
export const unnnicIcon = icon;
export const unnnicIconSvg = iconSvg;
export const unnnicToolTip = toolTip;
export const unnnicCard = card;
export const unnnicCardCompany = cardCompany;
export const unnnicCheckbox = checkbox;
export const unnnicRadio = radio;
export const unnniclanguageSelect = languageSelect;
export const unnnicModal = modal;
export const unnnicSelect = select;
export const unnnicSelectItem = selectItem;
export const unnnicCallAlert = call.callAlert;
export const unnnicCallModal = call.callModal;
export const unnnicAutocomplete = autocomplete;
export const unnnicTag = tag;
export const unnnicAccordion = accordion;
export const unnnicIndicator = indicator;
export const unnnicSkeletonLoading = skeletonLoading;
export const unnnicCarousel = carousel;
export const unnnicLabel = label;
export const unnnicTab = tab;
export const unnnicBanner = banner;
export const unnnicComment = comment;
export const unnnicDatePicker = datePicker;
export const unnnicBreadcrumb = breadcrumb;
export const unnnicSwitch = Switch;
export const unnnicSlider = Slider;
export const unnnicDataArea = DataArea;
