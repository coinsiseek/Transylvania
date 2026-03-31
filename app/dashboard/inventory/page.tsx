'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getInventory } from '@/lib/supabase';

export default function InventoryPage() {
  const [inventoryItems, setInventoryItems] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data = await getInventory();
        setInventoryItems(data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
        // Fallback to mock data
        setInventoryItems([
          { id: 1, name: "Health Potion", quantity: 5, type: "consumable", description: "Restores 50 HP" },
          { id: 2, name: "Magic Scroll", quantity: 2, type: "tool", description: "Casts a powerful spell" },
          { id: 3, name: "Iron Sword", quantity: 1, type: "weapon", description: "A sturdy iron blade" },
          { id: 4, name: "Leather Armor", quantity: 1, type: "armor", description: "Basic protective gear" },
          { id: 5, name: "Gold Coins", quantity: 250, type: "currency", description: "Trading currency" },
          { id: 6, name: "Ancient Key", quantity: 1, type: "key", description: "Opens a mysterious door" },
        ]);
      }
    };

    fetchInventory();
  }, []);

  const groupedItems = inventoryItems.reduce((acc: any, item: any) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  const itemTypes = Object.keys(groupedItems);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="glow-card p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-poison-green glitch-effect" data-text="INVENTORY">
          INVENTORY
        </h1>
        <p className="text-plasma-blue">Manage your equipment and consumables</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Item List */}
        <div className="lg:col-span-2 space-y-4">
          {itemTypes.map((type) => (
            <div key={type} className="glow-card p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-3 text-poison-green capitalize">{type}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {groupedItems[type].map((item: any) => (
                  <motion.div
                    key={item.id}
                    className={`p-3 rounded border cursor-pointer transition-all ${
                      selectedItem?.id === item.id
                        ? 'border-poison-green bg-dark-purple'
                        : 'border-poison-green border-opacity-50 hover:bg-dark-purple hover:bg-opacity-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold">{item.name}</span>
                      <span className="text-sm">x{item.quantity}</span>
                    </div>
                    <div className="text-xs text-plasma-blue mt-1">
                      {item.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Item Details Panel */}
        <div className="glow-card p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4 text-poison-green">ITEM DETAILS</h2>

          {selectedItem ? (
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-4">
                <div className="w-24 h-24 mx-auto bg-dark-purple border border-poison-green rounded-lg flex items-center justify-center mb-3">
                  <span className="text-3xl">
                    {selectedItem.type === 'weapon' ? '⚔️' :
                     selectedItem.type === 'armor' ? '🛡️' :
                     selectedItem.type === 'consumable' ? '🧪' :
                     selectedItem.type === 'key' ? '🔑' :
                     selectedItem.type === 'currency' ? '💰' : '📦'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{selectedItem.name}</h3>
                <p className="text-plasma-blue capitalize">{selectedItem.type}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="font-bold">Quantity:</span>
                  <span className="float-right">x{selectedItem.quantity}</span>
                </div>

                <div>
                  <span className="font-bold">Description:</span>
                  <p className="mt-1 text-plasma-blue">{selectedItem.description}</p>
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  <button className="pixel-button text-sm flex-1">
                    USE ITEM
                  </button>
                  <button className="pixel-button text-sm flex-1 bg-dark-purple">
                    DROP ITEM
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-8 text-plasma-blue">
              Select an item to view details
            </div>
          )}
        </div>
      </div>

      {/* Inventory Stats */}
      <div className="glow-card p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-3 text-poison-green">INVENTORY STATS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-dark-purple rounded">
            <div className="text-2xl font-bold">{inventoryItems.length}</div>
            <div className="text-sm">Total Items</div>
          </div>
          <div className="text-center p-3 bg-dark-purple rounded">
            <div className="text-2xl font-bold">
              {inventoryItems.filter(item => item.type === 'weapon').length}
            </div>
            <div className="text-sm">Weapons</div>
          </div>
          <div className="text-center p-3 bg-dark-purple rounded">
            <div className="text-2xl font-bold">
              {inventoryItems.filter(item => item.type === 'consumable').length}
            </div>
            <div className="text-sm">Consumables</div>
          </div>
          <div className="text-center p-3 bg-dark-purple rounded">
            <div className="text-2xl font-bold">
              {inventoryItems.reduce((sum, item) => sum + item.quantity, 0)}
            </div>
            <div className="text-sm">Total Units</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}