'use client';

import { useState, useEffect } from 'react';

export default function ContributionsList({ projectId }) {
    const [contributions, setContributions] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        fetchContributions();
    }, [projectId]);

    const fetchContributions = async () => {
        try {
            const response = await fetch(`/api/contributions/${projectId}`);
            const data = await response.json();
            setContributions(data);
        } catch (error) {
            console.error('Error fetching contributions:', error);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">Recent Contributors</h3>
                <button 
                    onClick={() => setIsVisible(!isVisible)}
                    className="text-gray-500 hover:text-gray-700"
                >
                    {isVisible ? '−' : '+'}
                </button>
            </div>
            
            {isVisible && (
                <div className="max-h-60 overflow-y-auto">
                    {contributions.length > 0 ? (
                        <ul className="space-y-2">
                            {contributions.map((contribution, index) => (
                                <li key={index} className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">
                                        {contribution.contributorName || 'Anonymous'}
                                    </span>
                                    <span className="text-green-600">
                                        ${contribution.amount}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-center">No contributions yet</p>
                    )}
                </div>
            )}
        </div>
    );
}'use client';

import { useState, useEffect } from 'react';

export default function ContributionsList({ projectId }) {
    const [contributions, setContributions] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        fetchContributions();
    }, [projectId]);

    const fetchContributions = async () => {
        try {
            const response = await fetch(`/api/contributions/${projectId}`);
            const data = await response.json();
            setContributions(data);
        } catch (error) {
            console.error('Error fetching contributions:', error);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">Recent Contributors</h3>
                <button 
                    onClick={() => setIsVisible(!isVisible)}
                    className="text-gray-500 hover:text-gray-700"
                >
                    {isVisible ? '−' : '+'}
                </button>
            </div>
            
            {isVisible && (
                <div className="max-h-60 overflow-y-auto">
                    {contributions.length > 0 ? (
                        <ul className="space-y-2">
                            {contributions.map((contribution, index) => (
                                <li key={index} className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">
                                        {contribution.contributorName || 'Anonymous'}
                                    </span>
                                    <span className="text-green-600">
                                        ${contribution.amount}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-center">No contributions yet</p>
                    )}
                </div>
            )}
        </div>
    );
}