import { Button, Grid2 } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export  function BasicTooltip() {
  return (
    <>
      <Grid2>
        
      </Grid2>
      <Grid2 container sx={{ justifyContent: "flex-end" }}>
        <Tooltip title="Delete" placement="bottom-end">
          <Button>Delete</Button>
        </Tooltip>
      </Grid2>
    </>
  );
}
