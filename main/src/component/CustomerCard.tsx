import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import ButtonGroup from "@mui/joy/ButtonGroup";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import Edit from "@mui/icons-material/EditNoteRounded";
import Delete from "@mui/icons-material/DeleteForeverOutlined";
import { CustomerWithOptionalAccounts } from "../interfaces/customer";
import { Button } from "@mui/joy";
import { KeyboardArrowRight } from "@mui/icons-material";
import CardActions from "@mui/joy/CardActions";
import { useNavigate } from "react-router-dom";

interface CustomerCardProps {
  data: CustomerWithOptionalAccounts;
}

const CustomerCard = ({ data }: CustomerCardProps) => {
  const navigate = useNavigate();
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: "100%" }}>
      {/* <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow> */}
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography textColor="success.plainColor" sx={{ fontWeight: "md" }}>
            {data.name}
          </Typography>
          <ButtonGroup variant="outlined" aria-label="edit and delete actions">
            <IconButton
              aria-label="edit"
              onClick={() => navigate(`/customer/${data.id}/edit`)}
            >
              <Edit />
            </IconButton>
          </ButtonGroup>
        </Box>
        <Typography level="body-sm">{data.email}</Typography>
        <CardActions>
          <Typography
            textColor="text.tertiary"
            sx={{ mr: "auto", fontSize: "sm" }}
          >
            Number Of Accounts {": "}
            <Typography level="title-lg">{data.Accounts?.length}</Typography>
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            endDecorator={<KeyboardArrowRight />}
            onClick={() => navigate(`/${data.id}/accounts`)}
          >
            Show Accounts
          </Button>
        </CardActions>
      </CardContent>

      {/* <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: "vertical-rl",
          justifyContent: "center",
          fontSize: "xs",
          fontWeight: "xl",
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderLeft: "1px solid",
          borderColor: "divider",
          bgcolor: "primary.dangerBg",
          width: 40,
        }}
      >
        Delete
      </CardOverflow> */}
    </Card>
  );
};

export default CustomerCard;
