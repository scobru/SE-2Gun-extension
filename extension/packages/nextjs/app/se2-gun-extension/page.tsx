"use client";

import React, { useEffect, useState } from "react";
import Gun from "gun";

export default function SE2GunExtensionPage() {
  const [gun, setGun] = useState<any>(null);
  const [message, setMessage] = useState<string>("");
  const [savedMessages, setSavedMessages] = useState<any[]>([]);

  useEffect(() => {
    const gunInstance = Gun();
    setGun(gunInstance);

    gunInstance
      .get("messages")
      .map()
      .on((data, id) => {
        setSavedMessages(prev => [...prev.filter(msg => msg.id !== id), { id, text: data.text }]);
      });
  }, []);

  const handleSave = () => {
    if (gun && message.trim()) {
      const id = Date.now().toString();
      gun.get("messages").get(id).put({ text: message });
      setMessage("");
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl bg-gradient-to-r  min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center ">GunDB Example</h1>

      <div
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 mb-10 rounded-lg shadow-md"
        role="alert"
      >
        <p className="font-bold text-2xl mb-4">Notice</p>
        <p className="mb-2">This extension adds a GunDB instance to your scaffold-ETH application.</p>
        <p className="mb-4">
          If you need more functionality, we recommend forking this repository as a template and start exploring more
          complex implementations of GunDB in scaffold-ETH.
        </p>
        <div className="space-y-4">
          <p>
            <strong className="block text-lg">SE2-GUN BOILERPLATE:</strong>
            <a href="https://github.com/scobru/se2-gun" className="text-blue-600 hover:underline">
              https://github.com/scobru/se2-gun
            </a>
          </p>
          <p>
            <strong className="block text-lg">SE2-GUN DOCS:</strong>
            <a href="https://github.com/scobru/se2-gun/README.md" className="text-blue-600 hover:underline">
            https://github.com/scobru/se2-gun/README.md
            </a>
          </p>
          <p></p>
          <p>
            <strong className="block text-lg">SE2-GUN EXTENSION:</strong>
            <a href="https://github.com/scobru/se2-gun-extension" className="text-blue-600 hover:underline">
              https://github.com/scobru/se2-gun-extension
            </a>
          </p>
          <p>
            <strong className="block text-lg">GUN-ETH PLUGIN (for GunDB):</strong>
            <code className="bg-gray-200 p-1 rounded">npm install gun-eth</code>
            <a
              href="https://github.com/scobru/se2-gun/packages/gun-eth"
              className="block mt-1 text-blue-600 hover:underline"
            >
              https://github.com/scobru/se2-gun/packages/gun-eth
            </a>
          </p>
        </div>
      </div>

      <div className="mb-8  p-6 rounded-lg shadow-md">
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Enter a message"
          className="w-full border border-gray-300 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSave}
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Save Message
        </button>
      </div>

      <div className="mb-8  p-6 rounded-lg shadow-md ">
        <h2 className="text-2xl font-semibold mb-4 ">Saved Messages:</h2>
        <ul className="space-y-2 text-black">
          {savedMessages.map(msg => (
            <li key={msg.id} className="bg-gray-100 p-3 rounded-md">
              {msg.text}
            </li>
          ))}
        </ul>
      </div>

      <div className=" p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 ">GunDB Logic Explained:</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>GunDB is initialized in the useEffect hook, creating a peer-to-peer instance.</li>
          <li>We subscribe to the "messages" node using gun.get("messages").map().on()</li>
          <li>
            This subscription listens for any changes in the "messages" node, including new additions and updates.
          </li>
          <li>When saving a message, we create a unique ID using the current timestamp.</li>
          <li>The message is then stored in GunDB using gun.get("messages").get(id).put()</li>
          <li>GunDB automatically syncs this data with other peers in the network.</li>
          <li>The UI updates reactively thanks to the subscription, showing all messages in real-time.</li>
        </ol>
      </div>
    </div>
  );
}
