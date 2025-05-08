const chatbotDiv = document.getElementById('chatbot');

const iframe = document.createElement('iframe');
iframe.src = "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/23/15/20241223152259-Y09L5SJY.json";
iframe.width = "100%";
iframe.height = "100%";
iframe.style.border = "none";

chatbotDiv.appendChild(iframe);
