
const { defineComponent, ref } = Vue;

export default defineComponent({
    name: 'Qrcode',
    props: {},
    template: `<p>二维码页面</p>`,
    setup(props, { emit, slots, attrs }) {
        console.log('Qrcode',)
        return {}
    }
});
