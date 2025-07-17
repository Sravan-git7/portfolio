import React from 'react';
import { Upload, Search, Filter, Download, Eye } from 'lucide-react';

const Assets: React.FC = () => {
  const assets = [
    {
      id: 1,
      name: 'Gaming Thumbnail Template',
      type: 'PSD',
      size: '2.4 MB',
      category: 'Templates',
      preview: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      name: 'Logo Animation',
      type: 'MP4',
      size: '15.8 MB',
      category: 'Animations',
      preview: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      name: 'Background Music Track',
      type: 'MP3',
      size: '5.2 MB',
      category: 'Audio',
      preview: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      name: 'Stock Photo Collection',
      type: 'ZIP',
      size: '45.6 MB',
      category: 'Images',
      preview: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      name: 'Transition Pack',
      type: 'PRPROJ',
      size: '8.9 MB',
      category: 'Effects',
      preview: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 6,
      name: 'Color Grading LUT',
      type: 'CUBE',
      size: '1.2 MB',
      category: 'LUTs',
      preview: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const categories = ['All', 'Templates', 'Images', 'Audio', 'Effects', 'LUTs', 'Animations'];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-light mb-2">Asset Library</h1>
          <p className="text-secondary">Manage your creative assets and resources</p>
        </div>
        <button className="bg-primary hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 transform hover:scale-105">
          <Upload size={20} />
          Upload Assets
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" size={20} />
          <input
            type="text"
            placeholder="Search assets..."
            className="w-full bg-dark text-light pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-secondary">
            <Filter size={20} />
            <span>Filter:</span>
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg text-sm transition-all duration-200 border border-gray-700 text-secondary hover:text-light hover:border-primary"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {assets.map((asset) => (
          <div key={asset.id} className="bg-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative group">
              <img 
                src={asset.preview} 
                alt={asset.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                <button className="bg-primary hover:bg-purple-600 text-white p-2 rounded-lg transition-colors duration-200">
                  <Eye size={20} />
                </button>
                <button className="bg-primary hover:bg-purple-600 text-white p-2 rounded-lg transition-colors duration-200">
                  <Download size={20} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-light mb-1 truncate">{asset.name}</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary">{asset.type}</span>
                <span className="text-secondary">{asset.size}</span>
              </div>
              <div className="mt-2">
                <span className="px-2 py-1 rounded-full text-xs bg-primary bg-opacity-20 text-primary">
                  {asset.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;