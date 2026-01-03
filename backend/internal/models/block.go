package models

import (
	"encoding/json"
	"time"
)

type Block struct {
	ID             string            `json:"id"`
	PageID         string            `json:"page_id"`
	Type           string            `json:"type"`
	Content        json.RawMessage   `json:"content"`
	Position       float64           `json:"position"`
	ParentBlockID  *string           `json:"parent_block_id,omitempty"`
	CreatedAt	   time.Time         `json:"created_at"`
	UpdatedAt	   time.Time         `json:"updated_at"`
}

type CreateBlockRequest struct {
	PageID		string          `json:"page_id" binding:"required"`
	Type		string          `json:"type" binding:"required"`
	Content		json.RawMessage `json:"content" binding:"required"`
	Position	float64         `json:"position" binding:"required"`
	ParentBlockID *string       `json:"parent_block_id,omitempty"`
}

type UpdateBlockRequest struct {
	Type 	       *string          `json:"type,omitempty"`
	Content        *json.RawMessage `json:"content,omitempty"`
	Position       *float64         `json:"position,omitempty"`
	ParentBlockID  *string          `json:"parent_block_id,omitempty"`
}