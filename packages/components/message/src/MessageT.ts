import { createNamespace } from "../../../utils/create";
import { MessProps, messProps, NotificationInstance } from "./message";
import "../../../theme-chalk/src/message.scss";

// 创建通知内容
const icons = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
};
const bem = createNamespace("message");

// 通知容器
let notifiContainer: HTMLElement | null = null;
// 通知实例表
let notifiList: NotificationInstance[] = [];
let idx = 0;

//创建通知容器
const creatNotifiContainer = () => {
  if (notifiContainer) return;
  notifiContainer = document.createElement("div");
  notifiContainer.classList.add(`${bem.e("container")}`);
  document.body.appendChild(notifiContainer);
};

// 距离头部的距离
const updateMessTop = () => {
  let currentTop = 20; //初始高度
  notifiList.forEach((item) => {
    const el = item.container;
    const height = el.offsetHeight;
    el.style.top = `${currentTop}px`;
    currentTop += height + 5;
  });
};

// 创建单个容器
const creatNotification = (options: Partial<MessProps> = {}) => {
  const props = {
    message: "",
    type: "info" as const,
    duration: 3000,
    closeable: false,
    ...options,
  };

  creatNotifiContainer();
  const id = idx++;
  // 创建容器元素
  const container = document.createElement("div");
  container.classList.add(`${bem.e("container-1")}`);

  const closeBtnHtml = props.closeable
    ? `<div class="${bem.e("close")}">X</div>`
    : "";

  container.innerHTML = `
    <div class="${bem.b()} ${bem.e(props.type)}">
      <span class="${bem.e("icon")}">${icons[props.type]}</span>
      <span class="${bem.e("message")}">${props.message}</span>
      ${closeBtnHtml}
    </div>
  `;

  notifiList.push({
    id,
    container: container,
  });
  // 计算顶部距离
  updateMessTop();
  // 添加到容器
  notifiContainer?.appendChild(container);

  //触发进入动画
  setTimeout(() => {
    container.style.animation = "fadeIn 0.3s ease forwards";
  }, 30);

  // 触发关闭
  const closebtn = container.querySelector(".GP-message__close");
  const close = () => {
    container.style.animation = "fadeOut 0.3s ease forwards";
    setTimeout(() => {
      notifiList = notifiList.filter((item) => item.id !== id);
      container.remove();
      updateMessTop();
    }, 300);
  };
  if (props.closeable) {
    closebtn?.addEventListener("click", close);
  } else {
    setTimeout(close, props.duration);
  }
};

// 导出全局方法
export const GPMessage = {
  info: (options: any) => creatNotification({ ...options, type: "info" }),
  success: (options: any) => creatNotification({ ...options, type: "success" }),
  warning: (options: any) => creatNotification({ ...options, type: "warning" }),
  error: (options?: any) => creatNotification({ ...options, type: "error" }),
};
