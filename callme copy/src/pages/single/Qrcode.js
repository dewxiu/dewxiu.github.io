const { defineComponent, ref, reactive } = Vue;
const { useRoute, useRouter } = VueRouter;

export default defineComponent({
    name: "Qrcode",
    props: {},
    template: dom("qrcodeTemplate"),
    setup(props, { emit, slots, attrs }) {
        const router = useRouter();
        const wechat = ref("./images/wechat.jpg");
        const callme = ref("./images/callme.png");
        const descList = reactive([
            "扫码一键拨打电话, 使用简单、方便、快捷",
            "自定义显示标题、内容、时间及二维码名称",
            "可以作为个人电子名片及提醒信息展示",
            "方便打印贴在车辆、门窗、公告栏等地方使用",
            "扫码次数不限、永久免费, 访问受网络差异影响",
            "所填信息仅生成二维码时使用, 不会收集个人信息",
            `输入邀请码才能生成二维码, 限时邀请码: xxx`,
        ]);
        const show = ref(true);
        const isWechat = ref(true);
        const formData = reactive({
            phone: "13595585549",
            yqCode: "222",
            title: "222",
            content: "222",
            date: "222",
            cName: "222",
            codeName: "222",
        });
        const formItems = reactive([
            {
                type: "input",
                label: "手机号",
                prop: "phone",
                placeholder: "请输入手机号",
                rules: [{ required: true, message: "请输入手机号" }],
            },
            {
                type: "input",
                label: "邀请码",
                prop: "yqCode",
                placeholder: "请输入邀请码",
                rules: [{ required: true, message: "请输入邀请码" }],
            },
            {
                type: "input",
                label: "标题",
                prop: "title",
                placeholder: "标题限制18个字以内",
                rules: [{ required: true, message: "请输入标题" }],
            },
            {
                type: "input",
                label: "内容",
                prop: "content",
                placeholder: "内容限制120个字以内",
                rules: [{ required: true, message: "请输入内容" }],
            },
            {
                type: "input",
                label: "时间",
                prop: "date",
                placeholder: "请输入时间",
                rules: [{ required: true, message: "请输入时间" }],
            },
            {
                type: "input",
                label: "署名",
                prop: "cName",
                placeholder: "请输入署名",
                rules: [{ required: true, message: "请输入署名" }],
            },
            {
                type: "input",
                label: "名称",
                prop: "codeName",
                placeholder: "二维码底部名称 如:(请扫码联系)",
                rules: [{ required: true, message: "请输入名称" }],
            },
        ]);


        function jsonToUrlParam(json) {
            return Object.keys(json)
                .map((key) => key + "=" + json[key])
                .join("&");
        }
        console.log("main");
        function onGenerate() {
            // router.push('/home/detail');
            show.value = true;
        }

        function onSubmit(values) {
            const { phone, yqCode, title, content, date, cName, codeName } = values;
            console.log("submit", values);

            var reg = /^1[3-9]\d{9}$/;
            if (!reg.test(phone)) {
                alert("手机号格式不正确");
                return;
            }
            const hasCode = '222'
            if (yqCode == "") {
                alert("请输入邀请码");
                return;
            } else if (hasCode !== yqCode) {
                alert("邀请码错误, 请先获取");
                return;
            }

            console.log('jsonToUrlParam', jsonToUrlParam)
            var codeQuery = jsonToUrlParam({
                gen: "hidden",
                tel: phone,
                title: (title),
                content: (content),
                time: (date),
                showList: "hidden", // 是否显示圆点列表
                showNotice: "block",
                showFooter: "block",
            });
            console.log('11111', btoa(codeQuery))
            console.log('22222', atob(btoa(codeQuery)))

            // 获取表单的值
            var url = `https://webxiu.github.io/callme/callme.html?${btoa(codeQuery)}`;
            console.log('=====================', url)

            const qrcode = new QRCode(document.querySelector(".gen-code"), {
                text: url,
                width: 300,
                height: 300,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
            });
            console.log("qrcode", qrcode);
            console.log("QRCode", QRCode);




            if (!title || !content || !time || !codeName) {
                alert("标题、内容、时间及名称不能为空");
                return;
            }

            var codeQuery = jsonToUrlParam({
                gen: "hidden",
                tel: phone,
                title: encodeURIComponent(title),
                content: encodeURIComponent(content),
                time: encodeURIComponent(time),
                showList: "hidden", // 是否显示圆点列表
                showNotice: "block",
                showFooter: "block",
            });

            // 获取表单的值
            var url = `https://webxiu.github.io/callme/callme.html?${codeQuery}`;
            console.log('=====================', url)
            qrcode && qrcode.clear();
            try {
                qrcode = new QRCode($(".qrcode"), {
                    text: url,
                    width: 400,
                    height: 400,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H,
                });
            } catch (error) {
                alert('生成失败')
            }
            console.log('qrcode', qrcode)

            const canvas = qrcode._el.childNodes[0];
            codeUrl = canvas.toDataURL("image/png");

            const ua = navigator.userAgent.toLowerCase();
            if (browser.versions.mobile && ua.match(/MicroMessenger/i) == "micromessenger") {
                //微信
                isWechat.value = true
            } else {
                //否则就是PC浏览器打开
                isWechat.value = false
            }

            const canvasDom = document.createElement("canvas");
            // 二维码下方文字高度
            const codeHeight = 80;
            //二维码宽高
            const qrcodewidth = 400;
            const qrcodeheight = 400;
            //canvas宽高
            const canvaswidth = qrcodewidth;
            const canvasheight = qrcodeheight + codeHeight;
            //logo宽高
            const logowidth = 100;
            const logoheight = 100;
            //文字描述位置
            const textleft = qrcodewidth / 2;
            const texttop = qrcodeheight + codeHeight / 2;
            //logo位置
            const logoleft = (qrcodewidth - logowidth) / 2;
            const logotop = (qrcodeheight - logoheight) / 2;
            // 二维码距离边缘间隙
            const gap = 20;

            const img = new Image();
            img.src = codeUrl;
            img.onload = function () {
                canvasDom.width = canvaswidth;
                canvasDom.height = canvasheight;
                const ctx = canvasDom.getContext("2d");
                //设置画布背景
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
                //设置文字样式
                ctx.fillStyle = "#000000";
                ctx.font = "bold " + 22 + "px Arial";
                ctx.textAlign = "center";
                //文字描述
                ctx.fillText(codeNameDom.value || "(请扫码联系)", textleft, texttop);
                //绘制二维码
                // ctx.drawImage(img, 0, 0);
                ctx.drawImage(img, gap, gap, canvasDom.width - 2 * gap, canvasDom.height - codeHeight - gap);
                //设置logo
                // const logo = new Image(logowidth, logoheight);
                // logo.setAttribute('crossOrigin', 'anonymous');
                // logo.src = './images/logo.png';
                // logo.onload = function () {
                //     ctx.drawImage(logo, logoleft, logotop, logowidth, logoheight);
                //     // 设置文字二维码
                //     const imgUrl = canvasDom.toDataURL("image/png")
                //     $('#code-img').src = imgUrl
                //     $('#code-img').style.display = 'block'
                // }
                // 设置文字二维码
                const imgUrl = canvasDom.toDataURL("image/png");
                codeUrl = imgUrl;
                $("#code-img").src = imgUrl;
                $("#code-img").style.display = "block";
            };
        }
        return {
            formData,
            formItems,
            wechat,
            callme,
            isWechat,
            show,
            descList,
            onSubmit,
            onGenerate,
        };
    },
});
