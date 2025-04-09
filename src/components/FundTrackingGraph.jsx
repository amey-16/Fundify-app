import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function FundTrackingGraph({
  currentFunds,
  goal
}) {
  const data = [
    {
      name: "Funds",
      total: currentFunds,
      goal: goal,
    },
  ]

  const percentageFunded = Math.round((currentFunds / goal) * 100)

  return (
    (<Card>
      <CardHeader>
        <CardTitle>Fund Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
              <Bar dataKey="goal" fill="#888888" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-center">
          <p className="text-2xl font-bold">
          ₹{currentFunds.toLocaleString()} / ₹{goal.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground">{percentageFunded}% Funded</p>
        </div>
      </CardContent>
    </Card>)
  );
}

