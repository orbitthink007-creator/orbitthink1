(function () {
    // Configuration
    const isLocal = window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.protocol === 'file:';
    const API_URL = isLocal
        ? "http://localhost:8000/api/chat"
        : "https://mehmaaaaaaaam-chatbot.hf.space/api/chat";
    const THEME_COLOR = "#6d28d9";

    // Create Styles
    const style = document.createElement('style');
    style.innerHTML = `
        .orbit-chat-widget-container {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 10000;
        }

        .orbit-chat-button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, ${THEME_COLOR}, #4c1d95);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
        }

        .orbit-chat-window {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 350px;
            height: 500px;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
            display: none;
            flex-direction: column;
            overflow: hidden;
        }

        .orbit-chat-window.open {
            display: flex;
        }

        .orbit-chat-header {
            background: linear-gradient(135deg, ${THEME_COLOR}, #4c1d95);
            color: white;
            padding: 16px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
        }

        .orbit-chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .orbit-message {
            max-width: 85%;
            padding: 10px 14px;
            border-radius: 10px;
            font-size: 14px;
            line-height: 1.5;
        }

        .orbit-message.bot {
            background: #f3f4f6;
            color: #1f2937;
            align-self: flex-start;
        }

        .orbit-message.user {
            background: ${THEME_COLOR};
            color: white;
            align-self: flex-end;
        }

        /* Markdown styling */
        .orbit-message.bot ol {
            padding-left: 18px;
            margin: 6px 0;
        }

        .orbit-message.bot ul {
            padding-left: 18px;
            margin: 6px 0;
        }

        .orbit-message.bot li {
            margin-bottom: 4px;
        }

        .orbit-chat-input-area {
            padding: 12px;
            border-top: 1px solid #e5e7eb;
            display: flex;
            gap: 8px;
        }

        .orbit-chat-input {
            flex: 1;
            border: 1px solid #e5e7eb;
            border-radius: 20px;
            padding: 8px 14px;
            outline: none;
        }

        .orbit-send-btn {
            background: transparent;
            border: none;
            color: ${THEME_COLOR};
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Container
    const container = document.createElement('div');
    container.className = 'orbit-chat-widget-container';

    // Button
    const button = document.createElement('button');
    button.className = 'orbit-chat-button';
    button.innerHTML = `💬`;

    // Window
    const windowEl = document.createElement('div');
    windowEl.className = 'orbit-chat-window';
    windowEl.innerHTML = `
        <div class="orbit-chat-header">
            <span>OrbitThink Assistant</span>
            <span id="orbit-close-btn" style="cursor:pointer;">×</span>
        </div>
        <div class="orbit-chat-messages" id="orbit-messages">
            <div class="orbit-message bot">Hello! I am your OrbitThink Assistant. How can I help you today?</div>
        </div>
        <div class="orbit-chat-input-area">
            <input class="orbit-chat-input" id="orbit-input" placeholder="Type a message..." />
            <button class="orbit-send-btn" id="orbit-send">➤</button>
        </div>
    `;

    container.appendChild(windowEl);
    container.appendChild(button);
    document.body.appendChild(container);

    // Logic
    let isOpen = false;
    const messagesEl = windowEl.querySelector('#orbit-messages');
    const inputEl = windowEl.querySelector('#orbit-input');
    const sendBtn = windowEl.querySelector('#orbit-send');
    const closeBtn = windowEl.querySelector('#orbit-close-btn');

    button.onclick = () => {
        isOpen = !isOpen;
        windowEl.classList.toggle('open', isOpen);
        if (isOpen) inputEl.focus();
    };

    closeBtn.onclick = () => {
        isOpen = false;
        windowEl.classList.remove('open');
    };

    // ✅ FIXED MESSAGE RENDERING
    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `orbit-message ${sender}`;

        if (sender === 'bot') {
            if (typeof marked !== 'undefined') {
                div.innerHTML = marked.parse(text);
            } else {
                div.textContent = text;
            }
        } else {
            div.textContent = text;
        }

        messagesEl.appendChild(div);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    async function sendMessage() {
        const text = inputEl.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        inputEl.value = '';
        inputEl.disabled = true;
        sendBtn.disabled = true;

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });

            const data = await res.json();
            addMessage(data.response || "Something went wrong.", 'bot');
        } catch {
            addMessage("Server error. Please try again.", 'bot');
        } finally {
            inputEl.disabled = false;
            sendBtn.disabled = false;
            inputEl.focus();
        }
    }

    sendBtn.onclick = sendMessage;
    inputEl.onkeypress = e => {
        if (e.key === 'Enter') sendMessage();
    };
    console.log("OrbitThink Chat Widget Loaded");
})();
