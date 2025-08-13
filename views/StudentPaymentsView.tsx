"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import StudentLayout from "@/components/StudentLayout"
import { useState } from "react"

export default function StudentPaymentsView() {
  const [searchTerm, setSearchTerm] = useState("")

  const payments = [
    {
      id: 1,
      course: "React.js Fundamentals",
      amount: "Rs. 25,000",
      processingFee: "Rs. 500",
      total: "Rs. 25,500",
      date: "2024-01-01",
      status: "Completed",
      method: "Credit Card",
      transactionId: "TXN123456789",
      invoice: "INV-2024-001",
    },
    {
      id: 2,
      course: "UI/UX Design Basics",
      amount: "Rs. 22,000",
      processingFee: "Rs. 500",
      total: "Rs. 22,500",
      date: "2023-12-15",
      status: "Completed",
      method: "eSewa",
      transactionId: "ESW987654321",
      invoice: "INV-2023-045",
    },
    {
      id: 3,
      course: "Python Programming",
      amount: "Rs. 18,000",
      processingFee: "Rs. 500",
      total: "Rs. 18,500",
      date: "2023-10-01",
      status: "Completed",
      method: "Bank Transfer",
      transactionId: "BNK456789123",
      invoice: "INV-2023-032",
    },
    {
      id: 4,
      course: "JavaScript Essentials",
      amount: "Rs. 15,000",
      processingFee: "Rs. 500",
      total: "Rs. 15,500",
      date: "2023-08-01",
      status: "Completed",
      method: "Khalti",
      transactionId: "KHL789123456",
      invoice: "INV-2023-021",
    },
    {
      id: 5,
      course: "Advanced React Workshop",
      amount: "Rs. 8,000",
      processingFee: "Rs. 200",
      total: "Rs. 8,200",
      date: "2023-11-20",
      status: "Pending",
      method: "Credit Card",
      transactionId: "TXN456789123",
      invoice: "INV-2023-038",
    },
  ]

  const filteredPayments = payments.filter((payment) => payment.course.toLowerCase().includes(searchTerm.toLowerCase()))

  const totalSpent = payments
    .filter((p) => p.status === "Completed")
    .reduce((sum, payment) => sum + Number.parseInt(payment.total.replace("Rs. ", "").replace(",", "")), 0)

  const completedPayments = payments.filter((p) => p.status === "Completed").length
  const pendingPayments = payments.filter((p) => p.status === "Pending").length

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment History</h1>
          <p className="text-gray-600">View and manage your course payments and transaction history.</p>
        </div>

        {/* Payment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rs. {totalSpent.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedPayments}</div>
              <p className="text-xs text-muted-foreground">Successful transactions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingPayments}</div>
              <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                Rs. {Math.round(totalSpent / completedPayments).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Per course</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by course name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>All Methods</option>
                <option>Credit Card</option>
                <option>eSewa</option>
                <option>Khalti</option>
                <option>Bank Transfer</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payment History Table */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>All your course payments and transaction details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold">{payment.course}</h3>
                      <Badge
                        variant={payment.status === "Completed" ? "secondary" : "destructive"}
                        className={
                          payment.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : payment.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }
                      >
                        {payment.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Date:</span> {payment.date}
                      </div>
                      <div>
                        <span className="font-medium">Method:</span> {payment.method}
                      </div>
                      <div>
                        <span className="font-medium">Transaction ID:</span> {payment.transactionId}
                      </div>
                      <div>
                        <span className="font-medium">Invoice:</span> {payment.invoice}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between lg:justify-end space-x-4 mt-4 lg:mt-0">
                    <div className="text-right">
                      <div className="text-lg font-bold">{payment.total}</div>
                      <div className="text-sm text-gray-500">
                        {payment.amount} + {payment.processingFee} fee
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        Download Invoice
                      </Button>
                      {payment.status === "Pending" && <Button size="sm">Complete Payment</Button>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPayments.length === 0 && (
              <div className="text-center py-8">
                <div className="text-gray-500 mb-2">No payments found</div>
                <div className="text-sm text-gray-400">Try adjusting your search criteria</div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Manage your preferred payment methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl mb-2">💳</div>
                <div className="font-medium">Credit/Debit Card</div>
                <div className="text-sm text-gray-500">Visa, Mastercard</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-medium">eSewa</div>
                <div className="text-sm text-gray-500">Digital wallet</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl mb-2">💰</div>
                <div className="font-medium">Khalti</div>
                <div className="text-sm text-gray-500">Mobile payment</div>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <div className="text-2xl mb-2">🏦</div>
                <div className="font-medium">Bank Transfer</div>
                <div className="text-sm text-gray-500">Direct transfer</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  )
}
