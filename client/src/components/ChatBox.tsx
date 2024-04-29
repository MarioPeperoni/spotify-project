import { useState, useRef, useEffect } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex max-h-[992px] w-full flex-col justify-end rounded-lg border-2 border-neutral-400 p-3 shadow-xl xl:w-96">
      <div ref={chatContainerRef} className="h-full overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className="my-2 rounded-lg bg-neutral-200 p-2">
            <p>
              <strong>{msg.from}: </strong>
              {msg.message}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message here..."
        className="w-full rounded-lg border-2 border-neutral-400 p-2"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newMessage: Message = {
              from: "Test User",
              message: e.currentTarget.value,
            };
            setMessages([...messages, newMessage]);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
};

export default ChatBox;
