import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Globe, 
  Users, 
  Briefcase, 
  Phone, 
  UserPlus, 
  Plus,
  Edit,
  MoreVertical,
  ExternalLink,
  Mail,
  Calendar,
  Activity,
  Target
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('contacts');

  const tabs = [
    { id: 'contacts', label: 'Contacts', count: 2 },
    { id: 'jobs', label: 'Jobs', count: 0 },
    { id: 'candidates', label: 'Candidates', count: 5 },
    { id: 'activities', label: 'Activities', count: 12 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">RG-Connect</h1>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">Chennai</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Log Call</span>
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Job</span>
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <UserPlus className="w-4 h-4" />
                <span>Add Contact</span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Edit className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600 mt-1">Active Contacts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-600 mt-1">Open Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">5</div>
              <div className="text-sm text-gray-600 mt-1">Placed Candidates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">12</div>
              <div className="text-sm text-gray-600 mt-1">Activities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white sticky top-0 z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Company Information */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Company Overview */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Company Overview</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  RG-Connect is a technology-driven company specializing in computer software solutions that empower businesses to operate efficiently in the digital era. The company designs, develops, and delivers scalable, secure, and user-friendly software tailored to meet diverse industry needs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With expertise in application development, system integration, cloud solutions, and emerging technologies, RG-Connect focuses on delivering high-performance products that streamline workflows, enhance collaboration, and drive innovation.
                </p>
              </div>
            </div>

            {/* Company Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Company Details</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">Industry</dt>
                    <dd className="text-sm text-gray-900">Computer Software</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">Location</dt>
                    <dd className="text-sm text-gray-900">Chennai</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">State</dt>
                    <dd className="text-sm text-gray-900">Tamil Nadu</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">Country</dt>
                    <dd className="text-sm text-gray-900">India</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">Postal Code</dt>
                    <dd className="text-sm text-gray-900">600001</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">Website</dt>
                    <dd className="text-sm">
                      <a href="https://www.rgconnect.com" className="text-blue-600 hover:text-blue-800 flex items-center">
                        www.rgconnect.com
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </dd>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            {activeTab === 'activities' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          Call logged with Ravula Ganesh
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Aug 14, 2025, 9:33 pm</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <UserPlus className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          New contact added
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Aug 13, 2025, 2:15 pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Jobs Section */}
            {activeTab === 'jobs' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Open Jobs</h2>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Job</span>
                  </button>
                </div>
                <div className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs posted yet</h3>
                  <p className="text-gray-600 mb-6">RG-Connect currently doesn't have any jobs</p>
                </div>
              </div>
            )}

          </div>

          {/* Right Column - Contacts & Quick Info */}
          <div className="space-y-8">
            
            {/* Key Contacts */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Key Contacts</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-orange-700">RG</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">Ravula Ganesh</h3>
                      <p className="text-sm text-gray-500">Primary Contact</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Company Stats</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">Candidates Placed</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Total Contacts</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-600">Recent Activities</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-gray-600">Last Activity</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">Today</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;