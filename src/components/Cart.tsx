import { X } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 flex max-w-full">
        <div className="w-screen max-w-md transform transition-transform duration-500 ease-in-out">
          <div className="flex h-full flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-6">
              <h2 className="text-lg font-medium">Shopping Cart</h2>
              <button onClick={onClose}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4">
              {items.length === 0 ? (
                <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">${item.price}</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="px-2 py-1 border rounded"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 border rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t px-4 py-6">
              <div className="flex justify-between text-base font-medium">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <button
                className="mt-6 w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
                disabled={items.length === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}