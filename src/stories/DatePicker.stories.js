import unnnicDatePicker from '../components/DatePicker/DatePicker.vue';

export default {
  title: 'example/DatePicker',
  component: unnnicDatePicker,
  argTypes: {
    months: { control: { type: 'array' } },
    days: { control: { type: 'array' } },
    options: { control: { type: 'array' } },
    clearLabel: { control: { type: 'text' } },
    actionLabel: { control: { type: 'text' } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  components: {
    unnnicDatePicker,
  },

  data() {
    return {};
  },

  template: `
    <div>
      <unnnic-date-picker v-bind="$props"></unnnic-date-picker>
    </div>
  `,

  methods: {},
});

export const Default = Template.bind({});

Default.args = {
  clearLabel: 'Limpar',
  actionLabel: 'Filtrar',
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  days: ['D', 'T', 'Q', 'Q', 'S', 'S', 'D'],
  options: [{
    name: 'Últimos 7 dias',
    id: 'last-7-days',
  }, {
    name: 'Últimos 14 dias',
    id: 'last-14-days',
  }, {
    name: 'Últimos 30 dias',
    id: 'last-30-days',
  }, {
    name: 'Últimos 12 meses',
    id: 'last-12-months',
  }, {
    name: 'Mês Atual',
    id: 'current-month',
  }, {
    name: 'Personalizar',
    id: 'custom',
  }],
};
