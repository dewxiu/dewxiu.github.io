
const { defineComponent, ref, reactive } = Vue;
const { useRoute, useRouter } = VueRouter;

export default defineComponent({
    name: 'Contact',
    props: {},
    template: dom('contactTemplate'),
    setup(props, { emit, slots, attrs }) {
        const router = useRouter();
        const wechat = ref('./images/wechat.jpg');
        const callme = ref('./images/callme.png');
        const descList = reactive([
            "扫码一键拨打电话, 使用简单、方便、快捷",
            "自定义显示标题、内容、时间及二维码名称",
            "可以作为个人电子名片及提醒信息展示",
            "方便打印贴在车辆、门窗、公告栏等地方使用",
            "扫码次数不限、永久免费, 访问受网络差异影响",
            "所填信息仅生成二维码时使用, 不会收集个人信息",
            `输入邀请码才能生成二维码, 限时邀请码: xxx`,
        ]);
        console.log('main',)
        function onGenerate() {
            router.push('/home/detail');
        }

        return { wechat, callme, descList, onGenerate }
    }
});
