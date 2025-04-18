import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function ContributionsList({
  contributions,
  dispatch
}) {
  const [newAmount, setNewAmount] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)

  const addContribution = () => {
    if (newAmount) {
      dispatch(
        { 
          type: "ADD_CONTRIBUTION", 
          contribution: { 
            amount: Number(newAmount), 
            isAnonymous,
            contributorName: isAnonymous ? "Anonymous" : null,
            timestamp: new Date().toISOString()
          } 
        }
      )
      setNewAmount("")
      setIsAnonymous(false)
    }
  }

  return (
    (<div className="space-y-4">
      <h3 className="text-lg font-semibold">Contributions</h3>
      {contributions.length > 0 ? (
        <div className="space-y-2">
          {contributions.map((contribution, index) => (
            <div key={index} className="flex items-center justify-between p-2 border rounded-md">
              <div>
                <p className="font-medium">
                  Amount: ${contribution.amount.toFixed(2)} 
                  <span className="ml-2 text-gray-500">
                    {contribution.isAnonymous ? "(Anonymous)" : ""}
                  </span>
                </p>
                {contribution.timestamp && (
                  <p className="text-xs text-gray-500">
                    {new Date(contribution.timestamp).toLocaleString()}
                  </p>
                )}
              </div>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={() => dispatch({ type: "REMOVE_CONTRIBUTION", index })}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No contributions yet</p>
      )}
      
      <div className="space-y-2 border-t pt-4 mt-4">
        <h4 className="font-medium">Add New Contribution</h4>
        <Input
          type="number"
          placeholder="Enter amount"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)} />
        <div className="flex items-center space-x-2">
          <Checkbox
            id="isAnonymous"
            checked={isAnonymous}
            onCheckedChange={(checked) => setIsAnonymous(checked)} />
          <label htmlFor="isAnonymous" className="text-sm font-medium">
            Make this an anonymous contribution
          </label>
        </div>
        <Button 
          onClick={addContribution}
          disabled={!newAmount || isNaN(Number(newAmount)) || Number(newAmount) <= 0}
        >
          Add Contribution
        </Button>
      </div>
    </div>)
  );
}

