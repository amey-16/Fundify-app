'use client'
import React, { useState } from "react";

const ProjectDiscussion = ({ description, faq, updates, comments }) => {
    const [activeTab, setActiveTab] = useState("Description");

    const renderContent = () => {
        switch (activeTab) {
            case "Description":
                return (
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Description</h2>
                        <p className="text-gray-700">{description}</p>
                    </section>
                );
            case "FAQ":
                return (
                    <section>
                        <h2 className="text-xl font-semibold mb-2">FAQ</h2>
                        <ul className="space-y-4">
                            {faq.map((item, index) => (
                                <li key={index} className="text-gray-700">
                                    <p className="font-medium">{item.question}</p>
                                    <p className="text-gray-600">{item.answer}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                );
            case "Updates":
                return (
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Updates</h2>
                        <p className="text-gray-700">{updates}</p>
                    </section>
                );
            case "Comments":
                return (
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Comments</h2>
                        <div className="space-y-4">
                            {comments.map((comment, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-4 rounded-lg shadow-sm border"
                                >
                                    <p className="text-gray-800">{comment}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-full mx-auto bg-white shadow-md rounded-lg">
                {/* Tabs */}
                <div className="flex border-b">
                    {["Description", "FAQ", "Updates", "Comments"].map((tab) => (
                        <button
                            key={tab}
                            className={`flex-1 text-center p-4 font-medium ${
                                activeTab === tab
                                    ? "border-b-2 border-blue-500 text-blue-500"
                                    : "hover:bg-gray-200"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-6">{renderContent()}</div>
            </div>
        </div>
    );
};

export default ProjectDiscussion;
