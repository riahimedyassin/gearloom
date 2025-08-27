"use client";

import React from "react";
import { useDragLayer } from "react-dnd";

interface DragLayerProps {}

export const CustomDragLayer: React.FC<DragLayerProps> = () => {
  const { itemType, isDragging, item, currentOffset } = useDragLayer(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    })
  );

  if (!isDragging || !currentOffset) {
    return null;
  }

  const renderItem = () => {
    switch (itemType) {
      case "TASK":
        return <DragPreview task={item} />;
      default:
        return null;
    }
  };

  const layerStyles: React.CSSProperties = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 100,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };

  const getItemStyles = (currentOffset: {
    x: number;
    y: number;
  }): React.CSSProperties => {
    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px) rotate(3deg)`;
    return {
      transform,
      WebkitTransform: transform,
    };
  };

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(currentOffset)}>{renderItem()}</div>
    </div>
  );
};

interface DragPreviewProps {
  task: any;
}

const DragPreview: React.FC<DragPreviewProps> = ({ task }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50";
      case "medium":
        return "border-l-yellow-500 bg-yellow-50";
      case "low":
        return "border-l-green-500 bg-green-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  const getPriorityTextColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-700 bg-red-100";
      case "medium":
        return "text-yellow-700 bg-yellow-100";
      case "low":
        return "text-green-700 bg-green-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div
      className={`w-80 border-l-4 border border-gray-200 rounded-lg p-4 shadow-2xl transform scale-105 ${getPriorityColor(
        task.priority
      )}`}
    >
      <div className="space-y-2">
        <h4 className="font-medium text-gray-900 line-clamp-2">{task.title}</h4>
        {task.description && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {task.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${getPriorityTextColor(
              task.priority
            )}`}
          >
            {task.priority.toUpperCase()}
          </span>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium text-gray-700">
              {task.assignedTo?.firstname?.[0]}
              {task.assignedTo?.lastname?.[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDragLayer;
