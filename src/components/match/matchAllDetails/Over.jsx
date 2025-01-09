import React from "react";

const Over = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-border">
          <thead>
            <tr className="bg-gray-200 text-primary-foreground">
              <th className="border border-border p-2">Ovs</th>
              <th className="border border-border p-2">ND Women</th>
              <th className="border border-border p-2">AK Women (Did Not Bat)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-border">
              <td className="border border-border p-2">6/0 (6 runs, 0 wkt)</td>
              <td className="border border-border p-2">
                Bowler: Molly Penfold
                <div className="flex space-x-1 mt-1 w-full">
                  <button className="bg-secondary text-secondary-foreground p-1 rounded w-full">
                    1
                  </button>
                  <button className="bg-secondary text-secondary-foreground p-1 rounded w-full">
                    .
                  </button>
                  <button className="bg-secondary text-secondary-foreground p-1 rounded w-full">
                    .
                  </button>
                  <button className="bg-secondary text-secondary-foreground p-1 rounded w-full">
                    1
                  </button>
                  <button className="bg-secondary text-secondary-foreground p-1 rounded w-full">
                    4
                  </button>
                </div>
                <span className="text-muted-foreground">RR: 6.00</span>
              </td>
              <td className="border border-border p-2"></td>
            </tr>
            <tr className="border border-border">
              <td className="border border-border p-2">14/1 (8 runs, 1 wkt)</td>
              <td className="border border-border p-2"></td>
              <td className="border border-border p-2"></td>
            </tr>
            <tr className="border border-border">
              <td className="border border-border p-2">22/1 (8 runs, 0 wkt)</td>
              <td className="border border-border p-2"></td>
              <td className="border border-border p-2"></td>
            </tr>
            <tr className="border border-border">
              <td className="border border-border p-2">24/2 (2 runs, 1 wkt)</td>
              <td className="border border-border p-2"></td>
              <td className="border border-border p-2"></td>
            </tr>
            <tr className="border border-border">
              <td className="border border-border p-2">30/3 (6 runs, 1 wkt)</td>
              <td className="border border-border p-2"></td>
              <td className="border border-border p-2"></td>
            </tr>
            <tr className="border border-border">
              <td className="border border-border p-2">34/4 (4 runs, 1 wkt)</td>
              <td className="border border-border p-2"></td>
              <td className="border border-border p-2"></td>
            </tr>
            <tr className="border border-border">
              <td className="border border-border p-2">37/4 (3 runs, 0 wkt)</td>
              <td className="border border-border p-2"></td>
              <td className="border border-border p-2"></td>
            </tr>
            <tr className="border border-border">
              <td className="border border-border p-2">43/4 (6 runs, 0 wkt)</td>
              <td className="border border-border p-2"></td>
              <td className="border border-border p-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-background text-foreground">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-gray-200 text-primary-foreground">
                <th className="border border-border p-2">Ovs</th>
                <th className="border border-border p-2">ND Women</th>
                <th className="border border-border p-2">AK Women (Did Not Bat)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="border border-border p-2">6/0 (6 runs, 0 wkt)</td>
                <td className="border border-border p-2">Bowler: Molly Penfold</td>
                <td className="border border-border p-2">
                  <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    1
                  </button>
                  <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    .
                  </button>
                  <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    1
                  </button>
                  <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    4
                  </button>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="border border-border p-2">14/1 (8 runs, 1 wkt)</td>
                <td className="border border-border p-2" colSpan="2"></td>
              </tr>
              <tr className="border-b border-border">
                <td className="border border-border p-2">22/1 (8 runs, 0 wkt)</td>
                <td className="border border-border p-2" colSpan="2"></td>
              </tr>
              <tr className="border-b border-border">
                <td className="border border-border p-2">24/2 (2 runs, 1 wkt)</td>
                <td className="border border-border p-2" colSpan="2"></td>
              </tr>
              <tr className="border-b border-border">
                <td className="border border-border p-2">30/3 (6 runs, 1 wkt)</td>
                <td className="border border-border p-2" colSpan="2"></td>
              </tr>
              <tr className="border-b border-border">
                <td className="border border-border p-2">34/4 (4 runs, 1 wkt)</td>
                <td className="border border-border p-2" colSpan="2"></td>
              </tr>
              <tr className="border-b border-border">
                <td className="border border-border p-2">37/4 (3 runs, 0 wkt)</td>
                <td className="border border-border p-2" colSpan="2"></td>
              </tr>
              <tr className="border-b border-border">
                <td className="border border-border p-2">43/4 (6 runs, 0 wkt)</td>
                <td className="border border-border p-2" colSpan="2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Over;
